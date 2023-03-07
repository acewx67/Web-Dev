import React from 'react'
import { useRouter } from 'next/router'
import {useState} from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'

function PokemonName() {
    let str = ""
    let attacks = ""
  const router = useRouter()
  const pokemonName = router.query.pokemonName;
  const [data,setData] = useState(null)
  async function getPokemon(){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    const response = await fetch(url)
    const responseData = await response.json()
    setData(responseData)
  }
  useEffect(() => {
    pokemonName && getPokemon();
  }, [pokemonName]);
  data && data.types.map((obj,i)=>{
    str += i < data.types.length-1 ? obj.type.name + ',' : obj.type.name
   })

   data && data.moves.map((obj,i)=>{
    attacks += i < 5 ? obj.move.name + ',' : obj.move.name
   })
   
//    for(let i=0;i<5;i++){
//     attacks += i < 4 ? data.moves[i].move.name + ', ' : data.moves[i].move.name
//    }
   

  

  return (
    <>
      <Navbar />
      {data && console.log(data)}
      {data && (
        
        <div className="info">
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt="pokemonImage"
          />
          <div className="text">
            Name : {pokemonName[0].toUpperCase() + pokemonName.substring(1)}
            <br/>
            
            Type : {str}
            <br/>
            Weight : {data.weight+" kg"}
            <br/>
            Attacks : {attacks}
                
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonName
