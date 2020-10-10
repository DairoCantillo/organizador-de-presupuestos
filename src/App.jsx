/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

const App = () => {
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostarPregunta, setMostarPregunta] = useState(true);
  const [crearGasto, setCrearGasto] = useState(false);
  const presupuestoRestante = (restanteTemp, gastoTemp) => restanteTemp - gastoTemp;

  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto]);
    }
    setRestante(presupuestoRestante(restante, gasto.cantidad));
    setCrearGasto(false);
  }, [gasto, gastos, crearGasto]);

  const showPregunta = () => (
    <Pregunta
      setPresupuesto={setPresupuesto}
      setRestante={setRestante}
      setMostarPregunta={setMostarPregunta}
    />
  );
  const showFormulario = () => (
    <div className="row">
      <div className="one-half column">
        <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} restante={restante} />
      </div>
      <div className="one-half column">
        <Listado gastos={gastos} />
        <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal contenido">
        {mostarPregunta ? showPregunta() : showFormulario()}
      </div>
    </div>
  );
};

export default App;
