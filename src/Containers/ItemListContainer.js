import React from "react";

export const ItemListContainer = ({ greeting, mensaje }) => {
    return (
        <>
           <h1>{greeting}</h1>
           <h1>{mensaje}</h1>
        </>
    );
};