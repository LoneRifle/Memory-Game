require('angular')

require('./app')

require('./directives/card')

import React from 'react'
import ReactDOM from 'react-dom'
import GameController from './components/GameController.jsx'

ReactDOM.render(<GameController />, document.getElementById('root'));
