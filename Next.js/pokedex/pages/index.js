
import {useState} from 'react'
import PokeInfo from './components/PokeInfo'
import {useRouter} from 'next/router'

function Pokedex({data}){
  const [list,setList] = useState(data.slice(0,10))
  const [i,setI] = useState(10)
  const [pokemon,setPokemon] = useState({name:"",id:0})
  const router = useRouter(

  )
  function displayPokemonName(data,i){
    console.log(i,'index');
    // console.log("displayPokemonName trigg");
    // console.log(list);
    setList([...list,...data.slice(i,i+10)])
    setI(i+10)
  }
  return (
    <>
      <div className="main">
        <div className="navbar">
          <img src="pokeapi_256.png" width={150} alt="logo" />
        </div>
        <div className="namesColumn">
          {/* {console.log(data)} */}
          <h3>Pokemon List</h3>
          
          {list.map((obj,i)=>{
            return(
            
              <div key={i} id={i} className='pokemonName' 
              onClick={(e)=>{
                setPokemon({name:obj.name,id:i+1})
                router.push(`/${obj.name}`)
                
              }} >
                {obj.name[0].toUpperCase()+obj.name.substring(1)}
              </div>
              
            )
          })}
          <div className="viewMore" onClick={()=>{displayPokemonName(data,i)}}>View More</div>
        </div>
        <PokeInfo pokemon={pokemon} data={data}/>
      </div>
    </>
  );
}


export default Pokedex

export async function getStaticProps(){
  const url = "https://pokeapi.co/api/v2/pokemon?limit=200/"
  const response = await fetch(url)
  const data = await response.json()

  return{
    props:{
      data : data.results,
    },
  }
}
