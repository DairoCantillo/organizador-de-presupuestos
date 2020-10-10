import React, { useState } from 'react';
import Error from './Error';

const Pregunta = ({ setRestante, setPresupuesto, setMostarPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleChangePresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1 || Number.isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setRestante(cantidad);
    setPresupuesto(cantidad);
    setMostarPregunta(false);
  };

  return (
    <>
      <h2>Ingresa tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Ingresa tu presupuesto"
          className="u-full-width"
          onChange={handleChangePresupuesto}
        />
        <input type="submit" className="u-full-width button-primary" value="Definir Presupuesto" />
      </form>
    </>
  );
};

export default Pregunta;
