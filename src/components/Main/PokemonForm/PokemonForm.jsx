import React, {useState} from "react";

const PokemonForm = () => {
  
  const [values, setValues] = useState({
    name: "",
    types: "",
    ability: "",
    image: "",
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      name: "",
      types: "",
      ability: "",
      image: "",
    });
  }

   const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    };


  return <div className="form-container">
    <h2>Nuevo Pokemon</h2>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="name">Nombre: </label>
      <input type="text" name="name" id="name" value={values.name} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor="type">Tipos: </label>
      <input type="text" name="type" id="type" value={values.types} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor="ability">Habilidades: </label>
      <input type="text" name="ability" id="ability" value={values.ability} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor="image">Imagen: </label>
      <input type="text" name="image" id="image" value={values.image} onChange={handleChange} />
      </div>
      <button type="submit">Crear Pokemon: </button>
    </form>
    </div>;
};

export default PokemonForm;
