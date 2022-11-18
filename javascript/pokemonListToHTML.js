const getPokemonInfo = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const pokemonInfo = await fetch(url);
    const response = await pokemonInfo.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const pokemonNumberFormat = (number) => {
  let numberFormated = `#000${number}`;
  if (number > 9) numberFormated = `#00${number}`;
  else if (number > 99) numberFormated = `#0${number}`;
  else if (number > 999) numberFormated = `#${number}`;

  return `<div class="number">${numberFormated}</div>`;
};

const pokemonTypeToHTML = (types) => {
  let html = `<div class="type">${types[0].type.name}</div>`;
  if (types.length == 2) {
    html += `<div class="type">${types[1].type.name}</div>`;
  }
  return html;
};

const pokemonToHTML = async (pokemonName) => {
  try {
    const data = await getPokemonInfo(pokemonName);
    return `
      <li class="pokemon_card">
        <div class="name">${data.name}</div>
          ${pokemonNumberFormat(data.id)}
        <img
          class="image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            data.id
          }.svg"
        />
        <div class="types">
          ${pokemonTypeToHTML(data.types)}
        </div>
      </li>
      `;
  } catch (error) {
    console.log(error);
    return false;
  }
};
