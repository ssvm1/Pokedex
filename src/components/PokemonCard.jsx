const PokemonCard = (props) => {
  const {pokemon} = props;

  console.log(props);
  return (
    <div>
      <h2>{props.pokemon.name}</h2>
      {props.pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
    </div>
  );
};

export default PokemonCard;
