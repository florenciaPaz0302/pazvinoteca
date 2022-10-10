import React from "react";
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import { ItemListContainer } from './Containers/ItemListContainer'

const App = () => {

  const nombre = "Maria";
  const mensaje = "hola"
  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Paz">
        <ItemListContainer greeting={mensaje}/>
      </Navbar>
    </>
  );
}
export default App