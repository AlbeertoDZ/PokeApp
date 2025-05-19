import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import SearchContainer from "./SearchContainer"
import PokemonDetails from "./PokemonDetails"
import PokemonForm from "./PokemonForm"


const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<SearchContainer />} />
      <Route path="/new" element={<PokemonForm />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
    </main>;
};

export default Main;
