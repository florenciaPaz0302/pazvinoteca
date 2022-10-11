import React, { useState } from "react";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([
    { nombre: "Pedro" },
    { nombre: "Juan" },
  ]);

  const pablo = { nombre: "Pablo" };

  const agregarPablo = () => {
    setUsuarios([...usuarios, pablo]);
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <button onClick={agregarPablo}>Agregar a Pablo</button>
      {usuarios.map((usuario, indice) => (
        <h1 key={indice}>{usuario.nombre}</h1>
      ))}
    </div>
  );
};