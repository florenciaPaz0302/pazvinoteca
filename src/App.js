import React from "react";
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import { ItemListContainer } from './Containers/ItemListContainer'
import { ComponenteEstados } from './ComponenteEstados'
import { Usuarios } from './Usuarios.js'

const App = () => {

  const nombre = "Maria";
  const mensaje = "hola"
const onAdd = () =>{
  console.log("agregaste al carrito")

}
  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Paz" />
      <ItemListContainer greeting={mensaje} mensaje="todo"/>
      <Usuarios />
      <ComponenteEstados stock={5} inicial={1} onAdd={onAdd} />
    </>
  );
}
export default App