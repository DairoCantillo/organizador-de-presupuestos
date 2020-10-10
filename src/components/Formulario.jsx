import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({ setGasto, setCrearGasto, restante }) => {
  const [cantidad, setCantidad] = useState('');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState(false);

  const resetForm = () => {
    setCantidad('');
    setNombre('');
  };

  const handleSubmitGastos = (e) => {
    e.preventDefault();
    if (cantidad < 1 || Number.isNaN(cantidad) || nombre.trim() === '' || cantidad > restante) {
      setError(true);
      return;
    }
    setError(false);
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    setGasto(gasto);
    setCrearGasto(true);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmitGastos}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto, tambien es posible que sobre pases tu dinero restante" />
      ) : null}
      <div className="campo">
        <label htmlFor="nombre">
          Nombre Gasto
          <input
            id="nombre"
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
      </div>
      <div className="campo">
        <label htmlFor="gasto">
          Cantidad Gasto
          <input
            id="gasto"
            type="number"
            className="u-full-width"
            placeholder="Ej. 300 "
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <input type="submit" value="Agregar gasto" className="button-primary u-full-width" />
    </form>
  );
};

export default Formulario;
