function NavBar({ setPokemonIndex, pokemonList }) {
  const onClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <>
      <ul>
        {pokemonList.map((pokemon, PokemonListIndex) => (
          <li key={PokemonListIndex}>
            <button onClick={() => onClick(PokemonListIndex, pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavBar;