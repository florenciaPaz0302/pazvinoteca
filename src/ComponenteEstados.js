import React, { useState, useEffect } from "react";

export const ComponenteEstados = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(1);
    const [numero, setNumero] = useState (0);

useEffect(()=>{
    //console.log("ejecuta useffect");
    setNumero(numero + 1);


    /*const intervalo = setInterval(()=>{
        console.log("ping");
    },1000)*/
    return(()=>{
        //clearInterval(intervalo);

    })

    },[]);

    const handlerclickSumar = ()=>{
        setContador(contador + 1);   
    };
    const handlerclickRestar = ()=>{
        setContador(contador - 1);    
    };
    const handlerclickReset = ()=>{
        setContador(1);    
    };
    return(
        <div>
            <h1>Componente para los Estados</h1>
            <h1>{contador}</h1>
            <h1>{numero}</h1>
            <button onClick={handlerclickSumar}>Sumar</button>
            <button onClick={handlerclickRestar}>Restar</button>
            <button onClick={handlerclickReset}>Reset</button>
        </div>
    );
};
