import React, {useState} from "react";

const PokemonForm = () => {
  
  const [values, setValues] = useState({
    name: "",
    type: "",
    ability: "",
    image: "",
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      name: "",
      type: "",
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
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" value={values.name} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor="type">Tipo</label>
      <input type="text" name="type" id="type" value={values.type} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor="ability">Habilidad</label>
      <input type="text" name="ability" id="ability" value={values.ability} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor="image">Imagen</label>
      <input type="text" name="image" id="image" value={values.image} onChange={handleChange} />
      </div>
      <button type="submit">Crear Pokemon</button>
    </form>
    </div>;
};

export default PokemonForm;
