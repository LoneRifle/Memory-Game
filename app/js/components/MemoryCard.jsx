import React, { Component } from 'react'

class MemoryCard extends Component {
  constructor (props) {
    super(props)
    this.flip = props.flip
    this.tile = props.tile
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.flip(this.tile)
  }

  render () {
    return (
      <div className={"card" + (this.tile.flipped ? " flipped" : "")} onClick={this.handleClick}>
        <img className="front" src="img/back.png"/>
        <img className="back" src={`img/${this.tile.title}.png`}/>
      </div>
    )
  }

}

export default MemoryCard