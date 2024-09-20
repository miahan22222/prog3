import React from "react";
import Resultados from "../Components/Resultados/Resultados";

function ResultadosBusqueda(props) {
    const id = props.match.params.id

    return (
        <div>
            <Resultados id={id}/>
        </div>
    )
}

export default ResultadosBusqueda;