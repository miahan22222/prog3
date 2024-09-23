import React from "react";
//import Formulario from "../Components/Formulario/Formulario"
import Movies from "../Components/Movies/Movies";
import Search from "../Components/Search/Search";

function Home() {

    return (
        <React.Fragment>
            <h1> Bienvenidos a M&M  </h1>
          {/* <Search/>  */}
           <h2 >Peliculas populares: </h2>
           <Movies endpoint="https://api.themoviedb.org/3/movie/popular?api_key=9458a99baf5a9ba3fe341cd43217ef95" url="populares" limit={5} mostrarComponenteControlado={false} cargarMas={false}/>
           <h2> Peliculas en cartel: </h2>
           <Movies endpoint="https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95" url="cartel" limit={5} mostrarComponenteControlado={false}/>
          
        </React.Fragment>

    )
    
}

export default Home; 