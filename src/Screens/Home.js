import React from "react";
//import Formulario from "../Components/Formulario/Formulario"
import Movies from "../Components/Movies/Movies";
import Search from "../Components/Search/Search";

function Home(props) {

    return (
        <React.Fragment>
            <h1> Bienvenidos a M&M  </h1>
            <Search history={props.history} />
            <Movies titulo="Peliculas populares:" endpoint="https://api.themoviedb.org/3/movie/popular?api_key=9458a99baf5a9ba3fe341cd43217ef95" limit={5} mostrarComponenteControlado={false} cargarMas={false} />
            <Movies titulo="Peliculas en cartel:" endpoint="https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95" limit={5} mostrarComponenteControlado={false} />

        </React.Fragment>

    )

}

export default Home; 