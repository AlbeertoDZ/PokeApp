import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import "./Search.css";

const Search = ({ pokemonList, setPokemons }) => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  //  console.log("pokemonList", pokemonList);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pokemonList) return; // Evita el error si pokemonList es undefined
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    setPokemons(filtered);
  };

 

   const handleChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input
          name="pokemon"
          value={value}
          onChange={handleChange}
          placeholder="Nombre del Pokémon"
        />
        <button type="submit">Buscar🔍</button>
      </form>
    </div>
  );
};

export default Search;
