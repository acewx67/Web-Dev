import React from "react";

function Card({ pokemonName, pokemonId,onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
      />
      <div className="pokemonName">{pokemonName}</div>
    </div>
  );
}

export default Card;
