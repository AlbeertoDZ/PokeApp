import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import PokemonList from "./PokemonList/PokemonList";

import Search from "./Search/Search";

const SearchContainer = () => {

  const [pokemonsList, setPokemonsList] = useState([]);

  // Obtiene la lista con nombre y url 
  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251`);
        // console.log(res.data.results);
        setPokemonsList(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemonList();
  }, []);

  const paintPokemon = () =>
    pokemonsList.map((pokemon) => (
      <PokemonList key={uuidv4()} data={pokemon} />
    ));

  return <div>
    <Search pokemonList={pokemonsList} setPokemons={setPokemonsList} />
    <section className="poke-list-container">
      {paintPokemon()}
    </section>
  </div>;
};

export default SearchContainer;
