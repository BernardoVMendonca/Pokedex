const showPokemonCard = async (pokemonName) => {
  const pokemonHTML = document.getElementById("pokemon_list");
  const search = document.getElementById("search");
  try {
    const searchError = document.getElementById("error");
    searchError.remove();
  } catch (error) {
    console.log(error);
  }
  try {
    const cleanButton = document.getElementById("clean_button");
    cleanButton.remove();
  } catch (error) {
    console.log(error);
  }
  try {
    const pokemon = await pokemonToHTML(pokemonName);

    if (!pokemon) {
      search.innerHTML += '<div id="error">Pokemon not found :(</div>';
    } else {
      search.innerHTML +=
        '<button id="clean_button" onclick="reloadPokedex()">X</button>';
      pokemonHTML.innerHTML = "";
      pokemonHTML.innerHTML = pokemon;
    }
  } catch (error) {
    console.log(error);
  }
};
const searchPokemon = async () => {
  const searchValue = document.getElementById("search_bar").value;

  try {
    await showPokemonCard(searchValue);
  } catch (error) {
    console.log(error);
  }
};

const reloadPokedex = () => {
  const cleanButton = document.getElementById("clean_button");
  cleanButton.remove();
  defOffset(0);
  const pokemonHTML = document.getElementById("pokemon_list");
  pokemonHTML.innerHTML = "";
  main();
};
