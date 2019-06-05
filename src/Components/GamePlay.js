import React from 'react';


class GamePlay extends React.Component {
  state = {user: null, comp: null, draw: null,  }




handleChoice = (e) => {
switch(this.state.userChoice + this.state.compChoice) {
  case "rockscissors":
  case "scissorspaper":
  case "paperrock":
  this.setState({user: win})
  break;
  case "scissorsrock":
  case "paperscissors":
  case "rockpaper":
  this.setState({comp: win})
  break;
  case "rockrock":
  case "scissorsscissors":
  case "paperpaper":
  this.setState({draw: draw})
  break;
}
}

// compWins();
// userWins();
// gameDraw();



render() {
  return (
console.log(handleChoice)
  )
  }
}
export default GamePlay;