import React from 'react';
import {Button, } from "semantic-ui-react";




const PlayerCard = ({color, symbol}) => {
  const style = {
    backgroundColor: color
  }
  return(
    <div style = {style} className="player-card">
    {symbol}
    </div>
  )
}



class GameBoard extends React.Component {
constructor(props) {
  super(props)
  this.symbols = ["rock", "paper", "scissors"]
  this.state = {}
}

runGame = () => {
  this.setState({
    playerRed: this.symbols[Math.floor(Math.random()*3)],
    playerBlue: this.symbols[Math.floor(Math.random()*3)]
  })
}

render() {
  return (
    <PlayerCard
      color="red"
      symbol={this.state.playerRed} />
      
      <PlayerCard
      color="blue"
      symbol={this.state.playerBlue} />
      <Button onClick={this.rungame}>Run Game</Button>
      )
    }
   }
   export default GameBoard;