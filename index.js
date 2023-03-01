window.onload = function() {
  firstPokemon();
  secondPokemon()
;
}


const firstPokemon = () => {
  let generatePokemon = Math.floor(Math.random() * 1000)
    fetch(`https://pokeapi.co/api/v2/pokemon/${generatePokemon}`)
    .then(res => res.json())
    .then(data => {stats = data;
    console.log(data)})
}
const secondPokemon = () => {
  let generatePokemon = Math.floor(Math.random() * 1000)
    fetch(`https://pokeapi.co/api/v2/pokemon/${generatePokemon}`)
    .then(res => res.json())
    .then(data => {stats2 = data;
    console.log(data)})
}

let stats = [];
let stats2 = [];

const displayOne = () => {
    const chosenPokemon = document.getElementById('pokemonOne')
    const img = document.createElement('img')
    const textNode = document.createTextNode(` Opponent: ${stats.name} HP: ${stats.stats[0].base_stat} ATK: ${stats.stats[1].base_stat}`)
    const li = document.createElement('li')
    img.src = stats.sprites.front_default
    chosenPokemon.appendChild(li)
    li.appendChild(textNode)
    li.appendChild(img)
    
}
const displayTwo = () => {
  const chosenPokemon2 = document.getElementById('pokemonTwo')
    const img = document.createElement('img')
    const textNode = document.createTextNode(` Opponent: ${stats2.name} HP: ${stats2.stats[0].base_stat} ATK: ${stats2.stats[1].base_stat}`)
    const li = document.createElement('li')
    img.src = stats2.sprites.front_default
    chosenPokemon2.appendChild(li)
    li.appendChild(textNode)
    li.appendChild(img)
}

const displayBattle = () => {
    if (stats.stats[1].base_stat > stats2.stats[0].base_stat) {
        document.getElementById("winner").innerHTML = `${stats.name} WINS!`
    } else if (stats2.stats[1].base_stat > stats.stats[0].base_stat) {
      document.getElementById("winner").innerHTML = `${stats2.name} WINS!`
    } else {
      document.getElementById("winner").innerHTML = "BOTH POKEMON HAVE FAINTED!"
    }}