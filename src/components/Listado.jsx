import React from 'react';
import Gasto from './Gasto';

const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map((gasto) => (
      <Gasto gasto={gasto} key={gasto.id} />
    ))}
  </div>
);

export default Listado;
