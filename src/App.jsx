import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"
import PropTypes, { array } from 'prop-types';
import NavBar from "./components/NavBar";
import React, { useEffect} from 'react';



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,

}

function App() {

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  )
  
  const [pokemonIndex, setPokemonIndex] = useState(0)
  
  return (
    
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
    </div>
  );
}


export default App;