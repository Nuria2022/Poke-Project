//1. Guardar URL
const URL = "https://pokeapi.co/api/v2/pokemon/"

let ListaPokemon = [];

//2.Sincronización

// Puerta a Narnia
window.onload = () => {
  init();
};

///Iniciación con espera
const init = async () => {
  const pokemons = await getPokemons();
  mappedPokemon(pokemons);
};

///Convertir de crudo a json (transformación)
const getPokemons = async () => {
  for (index = 1; index < 151; index++) {
    const pokemonApi = await fetch(`${URL}${index}`);

    const convertoJson = await pokemonApi.json();
    ListaPokemon.push(convertoJson);
  }
};

//3. Mapeo time

const mappedPokemon = () => {
  ListaPokemon.map((pokemon) => {
    return printPokemon({
      nombre: pokemon.name,
      imagen: pokemon.sprites.other.dream_world.front_default,
      peso:pokemon.weight,
    });
  });
};

//4.linkeando JS con HTML

const printPokemon = (pokemon) => {
  let pokemonContainer = document.querySelector(`#pokemon-container`);
  pokemonContainer.innerHTML += `
    <figure class="figure_container">
    <div class="pikachu-container">
    <h3>${pokemon.nombre}</h3>
    <img src="${pokemon.imagen}" alt="${pokemon.nombre}" />
    <p>${pokemon.peso}S</p>
    </div>
    </figure>
    `;
};


// parallax

$(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.2)+'px');
  } 
