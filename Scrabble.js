import React, { Component } from 'react';
import axios from 'axios';

class Scrabble extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      isValid: null,
      isLoading: false,
      suggestedWords: [],
    };
  }

  validateWord = () => {
    const { word } = this.state;

    if (!word) {
      return;
    }

    let isValid = false;
    let suggestedWords = [];
    const isWildcard = word.includes('?');

    this.setState({ isLoading: true });

    axios('https://raw.githubusercontent.com/jmlewis/valett/master/scrabble/sowpods.txt')
      .then(response => {
        const words = response.data.split('\r\n');
        if (!isWildcard) {
          isValid = words.includes(word.toUpperCase());
        } else {
          const regex = new RegExp(`^${word.replace(/\?/g, '.')}$`, 'i');
          suggestedWords = words.filter(w => regex.test(w)).filter(w => w.length === word.length);
        }
        this.setState({ isValid, suggestedWords, isLoading: false });
      })
      .catch(error => {
        console.error(error);
        this.setState({ isLoading: false });
      });
  }

  handleInputChange = (event) => {
    this.setState({ word: event.target.value, isValid: null, suggestedWords: [] });
  }

  render() {
    const { word, isValid, isLoading, suggestedWords } = this.state;

    return (
      <div className="Scrabble">
        <h3>Scrabble Checker</h3>
        <p>Tip: Use ? for wildcard</p>
        <input type="text" value={word} onChange={this.handleInputChange} />
        <button onClick={this.validateWord} disabled={!word || isLoading}>
          {word.includes('?') ? 'Check' : 'Validate'}
        </button>
        {isLoading && <p>Loading...</p>}
        {isValid === true && <p>{word} is a valid Scrabble word!</p>}
        {isValid === false && !suggestedWords.length && <p>{word} is not a valid Scrabble word.</p>}
        {suggestedWords.length > 0 && (
          <>
            <p>Suggested words:</p>
            <ul>
              {suggestedWords.map(w => <li key={w}>{w}</li>)}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Scrabble;
