import React, { useState } from "react";

export const ComponenteEstados = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(1);

    const handlerclickSumar = ()=>{
        setContador(contador + 1);   
    };
    const handlerclickRestar = ()=>{
        setContador(contador - 1);    
    };
    const handlerclickReset = ()=>{
        setContador(1);
        onAdd()    
    };
    return(
        <div>
            <h1>Componente para los Estados</h1>
            <h1>{contador}</h1>
            <button onClick={handlerclickSumar}>Sumar</button>
            <button onClick={handlerclickRestar}>Restar</button>
            <button onClick={handlerclickReset}>Reset</button>
        </div>
    );
};
