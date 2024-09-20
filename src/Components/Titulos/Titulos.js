import React from "react";
import { Link } from 'react-router-dom';
function Titulos(props) {
    return (
        <li>
            <Link to={props.data.ruta} > {props.data.nombre} </Link>
        </li>

    )
};

export default Titulos; 