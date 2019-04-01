<template>
<div ng-controller="GameCtrl" ref="gameCtrl" v-html="angularView">
</div>
</template>
<script>

const angularView = `<div>Pairs left to match: {{game.unmatchedPairs}}</div>
  <div>Matching: {{game.firstPick.title}}</div>
  <table>
    <tr ng-repeat="row in game.grid">
      <td ng-repeat="tile in row" class="container">
        <memory-card tile="tile" game="game"></memory-card>
      </td>
    </tr>
  </table>

  <div class="message">{{game.message}}</div>`

export default {
  data () {
    return {
      angularView,
      $rootScope: undefined,
    }
  },
  created () {
    angular.module('memoryGameApp').controller('GameCtrl', 
      [
        '$scope',
        'game',
        function GameCtrl($scope, game) {
          $scope.game = game
        }
      ]
    )
  },
  mounted () {
    this.$rootScope = angular.injector(['ng', 'memoryGameApp']).get('$rootScope')
    angular.bootstrap(this.$refs.gameCtrl, ['memoryGameApp'])
  },
  beforeDestroy () {
    this.$rootScope.destroy()
  }
}
</script>