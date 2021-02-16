import React, {Component} from "react";
import './App.css';
import Input from "./Input/Input";

class App extends Component {
  state = {
    translation: ""
  }

  tilRoever = event => {
    let wordArray = event.target[0].value.split(" ");
    let updatedArray = wordArray.map(word => {
      let index = word.length-1;
      let charArray = [...word];
      let lastChar = charArray[index];
      charArray.splice(index+1, 0, "o", lastChar);
      let newWord = charArray.join("");
      return newWord;
    });
    let newSentence = updatedArray.join(" ");
    this.setState({translation: newSentence});
    event.preventDefault();
  }

  fraRoever = event => {
    let wordArray = event.target[0].value.split(" ");
    let updatedArray = wordArray.map(word => {
      let index = word.length-1;
      let charArray = [...word];
      charArray.splice(index-1, 2);
      let newWord = charArray.join("");
      return newWord;
    });
    let newSentence = updatedArray.join(" ");
    this.setState({translation: newSentence});
    event.preventDefault();
  }
  
  render(){
    return (
      <div className="App">
        <h1>Oversetter for røverspråk</h1>
        <div>
          <Input direction="til" submit={event=>this.tilRoever(event)}/>
        </div>
        <div>
          <Input direction="fra" submit={event=>this.fraRoever(event)} />
        </div>
        <p>{this.state.translation}</p>
      </div>
    );
  }
}

export default App;
