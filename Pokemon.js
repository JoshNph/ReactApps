import React, { Component } from 'react';
import axios from 'axios';

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonName: 'pikachu',
      pokemon: {},
      spriteMode: 'default'
    };
  }

  componentDidMount() {
    this.fetchPokemon(this.state.pokemonName);
  }

  fetchPokemon = (pokemonName) => {
    axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => this.setState({
        pokemon: response.data
      }))
      .catch(error => {
        if (error.response && error.response.status === 404) {
          axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
            .then(response => this.fetchPokemon(response.data.evolves_from_species ? response.data.evolves_from_species.name : pokemonName))
            .catch(error => console.log(error));
        }
        else {
          console.log(error);
        }
      });
  }

  handleNameChange = (event) => {
    let inputName = event.target.value.toLowerCase();
    inputName = inputName.replace(/ /g, '-');
    inputName = inputName.replace(/'/g, '');
    this.setState({
      pokemonName: inputName
    });
  }


  handleRadioChange = (event) => {
    this.setState({
      spriteMode: event.target.value
    });
  }

  render() {
    const { pokemon, spriteMode } = this.state;
    const spriteUrl
      = spriteMode === 'default'
        ? pokemon.sprites?.front_default
        : pokemon.sprites?.front_shiny;

    return (
      <div className="App">
        <div>
          <input
            type="text"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                this.fetchPokemon(this.state.pokemonName);
              }
            }}
          />
          <button onClick={() => this.fetchPokemon(this.state.pokemonName)}>Search</button>
        </div>
        {pokemon.sprites &&
          <div>
            <label>
              <input type="radio" value="default" checked={spriteMode === 'default'} onChange={this.handleRadioChange} />
              Default
            </label>
            <label>
              <input type="radio" value="shiny" checked={spriteMode === 'shiny'} onChange={this.handleRadioChange} />
              Shiny
            </label>
            <br />
            <img src={spriteUrl} alt="Pokemon sprite" />
          </div>
        }
      </div>
    );
  }
}

export default Pokemon;
