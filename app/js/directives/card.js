

angular.module('memoryGameApp').directive('memoryCard', function () {
  return {
    template: `<div class="card" ng-class="{flipped: tile.flipped}" tile="tile" ng-click="game.flipTile(tile)">
      <img class="front" ng-src="img/back.png">
      <img class="back" ng-src="img/{{tile.title}}.png">
    </div>`,
    transclude: true,
    restrict: 'E',
    scope: {
      tile: '=',
      game: '='
    },
  }
})