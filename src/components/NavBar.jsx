function NavBar({ setPokemonIndex, pokemonList }) {
  const onClick = (index, name) => {
    setPokemonIndex(index);
    if (name.toLowerCase() === 'pikachu') {
      alert("pika pikachu !!!");
    }
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
