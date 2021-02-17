import React, { Component } from "react";
import './App.css';
import Input from "./Input/Input";

class App extends Component {
  state = {
    translation: "",
    visibility: true
  }

  /*Endrer status på visibility-egenskapen til state-objektet*/
  toggleVisibilityHandler = () => {
    const isVisible = this.state.visibility;
    this.setState({ visibility: !isVisible });
  }

  /*Sjekker en bokstav for om det er en vokal og returnerer true om det stemmer*/
  isVowel = char => {
    let vowels = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"];
    return vowels.includes(char);
  }

  /*Tar imot en setning og gjør endringer på den ut fra Røverspråk-kriteriene. 
  Lagrer endringene i visibility-egenskapen i state-objektet*/
  tilRoever = event => {
    const wordArray = event.target[0].value.split(" ");
    let updatedArray = wordArray.map(word => {
      let index = word.length - 1;
      let charArray = [...word];
      let lastChar = charArray[index];
      if (!this.isVowel(lastChar)) {
        charArray.splice(index + 1, 0, "o", lastChar);
      }
      let newWord = charArray.join("");
      return newWord;
    });
    let newSentence = updatedArray.join(" ");
    this.setState({ translation: newSentence });
    event.preventDefault();
  }

  /*Tar imot en setning og gjør endringer på den ut fra reverserte Røverspråk-kriterier. 
  Lagrer endringene i visibility-egenskapen i state-objektet*/
  fraRoever = event => {
    let wordArray = event.target[0].value.split(" ");
    let updatedArray = wordArray.map(word => {
      let index = word.length - 1;
      let charArray = [...word];
      let lastChar = charArray[index];
      if (!this.isVowel(lastChar)) {
        charArray.splice(index - 1, 2);
      }
      let newWord = charArray.join("");
      return newWord;
    });
    let newSentence = updatedArray.join(" ");
    this.setState({ translation: newSentence });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <h1>Oversetter for røverspråk</h1>
          <button className="toggle" onClick={this.toggleVisibilityHandler}>Endre oversettingsretning</button>
          {
            this.state.visibility ?
              <div>
                <Input direction="til" submit={event => this.tilRoever(event)} />
              </div> : null
          }
          {
            !this.state.visibility ?
              <div>
                <Input direction="fra" submit={event => this.fraRoever(event)} />
              </div> : null
          }
          <p>{this.state.translation}</p>
        </div>
      </div>
    );
  }
}

export default App;
