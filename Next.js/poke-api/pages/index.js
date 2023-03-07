import DefaultLayout from "./components/DefaultLayout";
import Card from "./components/Card";
import React from "react";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import {useState} from 'react'

function PokeApi({data}) {
  const [list,setList] = useState(data.slice(0,10))
  const [i,setI] = useState(10)
  const router = useRouter();
  function displayPokemonCard(data,i){
    console.log(i,'index');
    setList([...list,...data.slice(i,i+10)])
    setI(i+10)
  }
  return (
    <>
      <Navbar />
      {/* <DefaultLayout
        content={
          <>
            <Card pokemonName="bulbasaur" pokemonId={1} onClick={handleClick}/>
            <Card pokemonName="bulbasaur" pokemonId={9} onClick={handleClick}/>
           
          </>
        }
      /> */}
      <div className="content">
        {
          <>
            {list.map((obj, i) => {
              return (
                <Link href={`/${obj.name}`} key={i}>
                  <Card key={i} pokemonId={i + 1} pokemonName={obj.name[0].toUpperCase()+obj.name.substring(1)} />
                </Link>
              );
            })}
          </>
        }
      </div>
      {
        <div className="button">
          <div className="viewMore" onClick={()=>{displayPokemonCard(data,i)}}>
            View More
          </div>
        </div>
      }
    </>
  );
}

export default PokeApi;

export async function getStaticProps(){
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100/"
  const response = await fetch(url)
  const data = await response.json()

  return{
    props:{
      data : data.results,
    },
  }
}