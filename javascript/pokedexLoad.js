let count = 100;
const pokedex = document.getElementById("pokedex");
pokedex.onscroll = function() {loadPokemonPokedex()}

function loadPokemonPokedex(){

   if(pokedex.scrollTop == pokedex.scrollHeight - pokedex.clientHeight){
        defOffset();
        main();
        console.log(offset)
    }
}