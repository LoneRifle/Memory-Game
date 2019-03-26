import React, { Component } from 'react'
import MemoryCard from './MemoryCard.jsx'

class GameController extends Component {
  constructor (props) {
    super(props)
    this.state = {
      game: props.game,
    }
    this.flip = this.flip.bind(this)
  }

  flip (tile) {
    const game = this.state.game
    game.flipTile(tile)
    this.setState({ game })
  }

  render () {
    return (
      <div>
        <div>Pairs left to match: {this.state.game.unmatchedPairs}</div>
        <div>Matching: {(this.state.game.firstPick || {}).title}</div>
      
        <table>
          <tbody>
          {
            this.state.game.grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {
                  row.map((tile, colIndex) => (
                    <td key={`${rowIndex}-${colIndex}`} className="container">
                      <MemoryCard tile={tile} flip={this.flip}></MemoryCard>
                    </td>
                  ))
                }
              </tr>
            ))
          }
          </tbody>
        </table>
        <div className="message">{this.state.game.message}</div>
      </div>
    )
  }
}

export default GameController