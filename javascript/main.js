const main = async () => {
  const offset = 0;
  const limit = 10;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const pokemonHTML = document.getElementById("pokemon_list");
  let pokemonList;
  try {
    const response = await fetch(url);
    const pokemonInfos = await response.json();
    const pokemonList = pokemonInfos.results;

    for (i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      const html = await pokemonToHTML(pokemon.name);
      pokemonHTML.innerHTML += html;
    }
  } catch (error) {
    console.log(error);
  }
};

main();
