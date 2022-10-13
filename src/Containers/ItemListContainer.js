import React, { useEffect, useState } from "react";

const productos = [
    {nombre:"vino", id:0, categoria:"vinos", stock:5, precio:200},
    {nombre:"cerveza", id:1, categoria:"cervecitas", stock:10, precio:400},
    {nombre:"fernet", id:2, categoria:"fernecito", stock:15, precio:100},
    {nombre:"gin", id:3, categoria:"gins", stock:12, precio:300},
];


const obtenerProductos = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve(productos);
    }, 2000);
     //reject("error")
})

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        obtenerProductos
        .then((data)=>{
            setProductos(data)
        })
        .catch(()=>{
            console.log("salio mal");
            console.log("todomal");
        })

    }, [])
    return (
        <>
           <h1>{greeting}</h1>
           {
            productos.map((producto)=>{
                return <h2 key={producto.id}>{producto.nombre}</h2>
            })
           }
        </>
    );
};