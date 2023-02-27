  const loadPokemon = () => { 
    let generatePokemon = Math.floor(Math.random() * 51)
    fetch(`https://pokeapi.co/api/v2/${generatePokemon}`)
       .then((response) => response.json())
       .then((data) => {
         console.log(data)
         chosenPokemon(data.results)
           info.push
       }) 
}