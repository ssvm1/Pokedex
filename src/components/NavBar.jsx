function NavBar({setPokemonIndex, pokemonIndex, pokemonList}) {


const handleClickNext = () => {
  console.log("Next click")
  setPokemonIndex( pokemonIndex + 1)
}
const handleClickPrevious = () => {
  console.log("Previous click")
  setPokemonIndex( pokemonIndex - 1)
}

return (
    <>
{pokemonIndex > 0 && (
    <button onClick={handleClickPrevious}>Précédent</button>
  )}
  {pokemonIndex < pokemonList.length - 1 && (
    <button onClick={handleClickNext}>Suivant</button>
  )}
  </>
)
}

export default NavBar;
