import React from "react";
import Titulos from "../Titulos/Titulos";
import "./style.css";


function Navbar() {
    const titulos = [
        {
            nombre: "HOME",
            ruta: '/'
        },
        {
            nombre: "Favoritos",
            ruta: '/favoritos'
        },
        {
            nombre: "Populares",
            ruta: '/populares'
        },
        {
            nombre: "Cartelera",
            ruta: '/cartel'
        }

    ]

    return (
        <nav>
            <ul className="logo">
                <li> <img src="./img/logo.jpg" alt="" /> </li>
            </ul>
            <ul className="main-nav">
                {
                    titulos.map((elm, idx) => <Titulos key={elm + idx} data={elm} />)
                }

            </ul>

        </nav>
    )
};

export default Navbar;