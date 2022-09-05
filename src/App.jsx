import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {

const [ pokedex, setPokedex] = useState({})
const [ isDecimeters, setIsDecimeters] = useState(true)
const [ isHectograms, setIsHectograms] = useState(true)

const idRandom = Math.floor(Math.random() * 600) + 1 

useEffect( () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${idRandom}/`)
.then( res => setPokedex(res.data))
}, [])

const changeUnits = () =>{
  setIsDecimeters(!isDecimeters)
  setIsHectograms(!isHectograms)
}

const changePokemon = () =>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${idRandom}/`)
  .then( res => setPokedex(res.data))
}

console.log(pokedex);


  return (
    <div className="App">
      <h1>{pokedex.name}</h1>
      <img src={pokedex.sprites?.other.dream_world.front_default} alt="pokemon-img" />
      <div> <b>weight:</b> { isHectograms ? pokedex.weight : pokedex.weight/10} {isHectograms ? "hectograms" : "kilograms"}</div>
      <div> <b>height:</b> {isDecimeters ? pokedex.height : pokedex.height/10} {isDecimeters ? "decimeters" : "meters"}</div>
      <div> <b>type:</b>  {pokedex.types?.[0].type.name}</div>
      <button onClick={changeUnits}> Change Units </button>
      <button onClick={changePokemon}>Change Pokemon</button>
    

    </div>
  )
}

export default App
