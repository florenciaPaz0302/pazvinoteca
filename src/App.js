import React, { useState } from "react";
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import { ItemListContainer } from './Containers/ItemListContainer'
import { ComponenteEstados } from './ComponenteEstados'

const App = () => {
  const mensaje = "hola"

  const [show, setShow] = useState(true);

  const alternar = () =>{
    setShow(!show);
  }

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={mensaje} />
    </>
  );
}
export default App
/*{show ? <ComponenteEstados /> : <h1>Aqui no hay nada</h1>}
<button onClick={alternar}>Alternar</button>*/