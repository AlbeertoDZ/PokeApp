import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemonDetails }) => {
  return (
    <article className="poke-card">
      <span className="poke-id">#{pokemonDetails.id}</span>
      <img src={pokemonDetails.sprites?.front_shiny} alt="imagen" />
      <h2>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h2>
      <p>
        Tipos: {pokemonDetails.types?.[0].type.name}{" "}
        {pokemonDetails.types?.[1]?.type.name}
      </p>
      <p>
        Habilidades:
      </p>
      <p>
        {pokemonDetails.abilities?.[0].ability.name}
      </p>
      <p>
        {pokemonDetails.abilities?.[1]?.ability.name}
      </p>
    </article>
  );
};

export default PokemonCard;
