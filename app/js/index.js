require('angular')

angular.module('memoryGameApp', [])

require('./directives/card')

const Game = require('./game')

function makeGame () {
  const tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin']

  return new Game(tileNames)
}

import React from 'react'
import ReactDOM from 'react-dom'
import GameController from './components/GameController.jsx'

const game = makeGame()

ReactDOM.render(<GameController game={game} />, document.getElementById('root'))
