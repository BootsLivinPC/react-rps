import React from 'react';
import OptionBox from "./Components/OptionBox";
import rock from "./images/rock.jpeg";
import paper from "./images/paper.jpeg";
import scissors from "./images/scissors.jpeg";
import {Container, Header, Grid,  } from "semantic-ui-react";
// import GamePlay from "./Components/GamePlay";

class App extends React.Component {
state = { userChoice: null, }
compChoice = [paper, rock, scissors]


optionClick = (option) => {
let {userChoice} =  this.state
this.setState({ userChoice: option, })
console.log(userChoice)
}

 randomChoice = () => {
  return this.state.userChoice !== null ? 
  <div> <h2>Computer Choice:</h2> {this.compChoice[Math.floor(Math.random() * this.compChoice.length)]}
  </div> : <div> </div>
 }


render() {
    return (
<Container>
  <Header as="h1">React RPS</Header>
  <hr/>
  <Grid>
   <Grid.Row columns={3}>
    <Grid.Column>
     <OptionBox className="Img" img={rock} optionClick={this.optionClick} />
    </Grid.Column>
    <Grid.Column>
     <OptionBox className="Img" img={paper} optionClick={this.optionClick} />
    </Grid.Column>
    <Grid.Column>
     <OptionBox className="Img" img={scissors} optionClick={this.optionClick} />
    </Grid.Column>
    <Grid.Column>
      <div>UserChoice:{this.state.userChoice}</div>
      </Grid.Column>
      <Grid.Column>
     <div>CompChoice:{this.state.compChoice}</div>
     </Grid.Column>
    </Grid.Row>
  </Grid>
{/* userChoice={this.state.userChoice}
compChoice={this.state.compChoice} */}
</Container>
    )
  }
}
export default App;
