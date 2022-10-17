import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(URL_CAT);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();

  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
    </>
  );
};

/*
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));*/


/*const productos = [
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

    }, [])*/