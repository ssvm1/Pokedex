const pokemonList = [
  {
    name: 'Bulbasaur',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'mew',
  },
  {
    name: 'Random',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
  },
];

const PokemonCard = () => {
  let pokemon = pokemonList[0]; 
  
  return (
    <div>
      <h2>{pokemon.name}</h2>
      {pokemon.imgSrc ? (<img src={pokemon.imgSrc}/>) : (<p>???</p>)}
    </div>
  );
};

export default PokemonCard;
