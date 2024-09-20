import React from "react";
import Movies from "../Components/Movies/Movies";

function Cartel() {
    return (
        <React.Fragment>
            <Movies  endpoint="https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95" url="cartel" titulo= "Todas las Peliculas en Cartelera" limit={8} mostrarComponenteControlado={true} cargarMas={true}/>
        </React.Fragment> 
    )
}

export default Cartel;