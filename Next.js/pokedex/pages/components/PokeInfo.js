import React from 'react'

function PokeInfo(props) {
  return (
    <div className="pokeInfo">
      
        <div className="image">
          {/* {console.log(props.data[props.pokemon.id-1])} */}
          {props.pokemon.id > 0 && (
            <img
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`}
            />
          )}
        </div>
        {props.pokemon.name !== "" && (
          <div className="info">
            Name : {props.pokemon.name[0].toUpperCase() +
              props.pokemon.name.substring(1)}
            Type : 
            
            <div className="gif">
              <img
                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${props.pokemon.name}.gif`}
              />
            </div>
          </div>
        )}
      
    </div>
  );
}
async function fetchData(props) {
    const pokemonData = await fetch(props.data[props.pokemon.id-1].url)
    // console.log(pokemonData);
}

export default PokeInfo
