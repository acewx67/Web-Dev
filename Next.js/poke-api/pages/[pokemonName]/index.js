import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ErrorPage from "next/error";

function PokemonName() {
  let str = "";
  let attacksArray = null;
  let attacks = "";
  const router = useRouter();
  const pokemonName = router.query.pokemonName;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  async function getPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    try {
      setLoading(true)
      const response = await fetch(url);
      if (response.status === 200 && response.ok === true) {
        const responseData = await response.json();
        setData(responseData);
        setLoading(false)
      }
      setLoading(false)
    } catch (e) {
      console.log("error in async func dynamic pokemon name route",e);
    }
  }
  useEffect(() => {
    pokemonName && getPokemon();
  }, [pokemonName]);
  data &&
    data.types.map((obj, i) => {
      str += i < data.types.length - 1 ? obj.type.name + "," : obj.type.name;
    });
  attacksArray = data ? data.moves.splice(0, 6) : null;
  data &&
    attacksArray.map((obj, i) => {
      attacks += i < 5 ? obj.move.name + ", " : obj.move.name;
    });

  return (
    <>
      <Navbar />
      {!data  && !loading && <div className="errorMsg"><h3>Page Not Found!!!</h3></div>}
      {data && console.log(data)}
      {data && (
        <div className="info">
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt="pokemonImage"
          />
          <div className="text">
            Name : {pokemonName[0].toUpperCase() + pokemonName.substring(1)}
            <br />
            Type : {str}
            <br />
            Height : {data.weight/10 + " m"}
            <br/>
            Weight : {data.weight/10 + " kg"}
            <br />
            Attacks : {attacks}
            <div className="gif">
              <img
                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonName}.gif`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonName;
