import React from "react";
import "./Header.css"
import logo from "../../assets/logo.png"
import shoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="tienda online" />
            <h1>Vinoteca</h1>
            <nav>
                <a href="">Categoria1</a>
                <a href="">Categoria2</a>
                <a href="">Categoria3</a>
                <a href="">Categoria4</a>
            </nav>
            <shoppingCartIcon />
        </header>
    )
}

export default Header