import React, { Component } from 'react'

class GameController extends Component {
  constructor (props) {
    super(props)
    angular.module('memoryGameApp').controller('GameCtrl', function GameCtrl($scope, game) {
      $scope.game = game
    })
  }

  componentDidMount () {
    this.$rootScope = angular.injector(['ng', 'memoryGameApp']).get('$rootScope')
    angular.bootstrap(this.container, ['memoryGameApp'])
  }

  componentWillUnmount () {
    this.$rootScope.$destroy()
  }

  render () {
    return (
    <div
      ng-controller="GameCtrl"
      ref={c => this.container = c}
      dangerouslySetInnerHTML={{__html: `
        <div>Pairs left to match: {{game.unmatchedPairs}}</div>
        <div>Matching: {{game.firstPick.title}}</div>
      
        <table>
          <tr ng-repeat="row in game.grid">
            <td ng-repeat="tile in row" class="container">
              <memory-card tile="tile" game="game"></memory-card>
            </td>
          </tr>
        </table>
      
        <div class="message">{{game.message}}</div>
      `}}
      />
    )
  }
}

export default GameController