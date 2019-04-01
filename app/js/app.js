'use strict';
/* App Controllers */

const Game = require('./game')

var memoryGameApp = angular.module('memoryGameApp', []);

require('./directives/card');

memoryGameApp.factory('game', function() {
  var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin'];

  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', 
  [
    '$scope',
    'game',
    function GameCtrl($scope, game) {
      $scope.game = game;
    }
  ]
);
