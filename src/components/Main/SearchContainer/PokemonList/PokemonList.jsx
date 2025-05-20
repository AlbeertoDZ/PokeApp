import React, { useEffect, useRef ,useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard"
import Search from "../Search";
import { v4 as uuidv4 } from "uuid"
import "./PokemonList.css";

const PokemonList = ({data}) => {
  
  // Lista de detalles de todos los pokémon
  const [pokemonDetails, setPokemonDetails] = useState([]);

  // const imputRef = useRef("");

  // Obtener los detalles de todos los pokemons
  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const resp = await axios.get(data.url);
          // console.log(resp.data);
          setPokemonDetails(resp.data);
        if (data.length > 0) {
          // Array por cada pokemon de la lista
          const allDetails = [];
          
          // for (let pokemon of data) {
          //   const resp = await axios.get(pokemon.url);
          //   allDetails.push(resp.data);
          //   console.log(resp.data);
          // }
          // setPokemonDetails(allDetails);
          //console.log(allDetails);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllPokemons();
  }, []);

  

  return (
    <section>
      <PokemonCard key={uuidv4()} data={data} pokemonDetails={pokemonDetails} />
    </section>
  );
};

export default PokemonList;
