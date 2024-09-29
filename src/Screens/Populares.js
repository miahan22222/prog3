import React from "react";
import Movies from "../Components/Movies/Movies";


function Populares() {

    return (
        <React.Fragment>
            <Movies endpoint="https://api.themoviedb.org/3/movie/popular?api_key=9458a99baf5a9ba3fe341cd43217ef95" titulo="Todas las Peliculas Populares" limit={8} mostrarComponenteControlado={true} cargarMas={true} />
        </React.Fragment>
    )
}

export default Populares;