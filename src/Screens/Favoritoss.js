import React from "react";
import Favoritos from "../Components/Favoritos/Favoritos";

function Favoritoss() {
    return (

        <div>

            <p> Favoritos:</p>
            <Favoritos />
        </div>

    )
}

export default Favoritoss;


/* import React, { Component } from "react";
import Pelicula from "../Components/Pelicula/Pelicula";


class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favs: []
        };
    }
    componentDidMount() {
        let storage = localStorage.getItem("categoriaFavs")
        if (storage !== null) {
            let arrParseado = JSON.parse(storage);
            arrParseado.map(id =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9458a99baf5a9ba3fe341cd43217ef95`)
                    .then((resp) => resp.json())
                    .then((data) => {
                        this.setState({
                            favs: this.state.favs.concat(data)
                        })



                    })
                    .catch((err) => console.log(err)))
                ;
        }

    }


    render() {
        const { favs } = this.state;

        return (
            <>
                <h1>Favoritos:</h1>
                <div>

                    {favs.length === 0 ? (<p>No tienes peliculas favoritas</p>)
                        :
                        (favs.map((peli, idx) => (<Pelicula key={idx} peli={peli} />)))}</div>
            </>


        )
    }

}

export default Favoritos; */

//local storage: para que persista en el tiempo / session storage: para solo la sesion
//favoritos--> agregar(id): traer la propiedad q me interesa --> get item("favoritos") --> valido si es null o no
// - si NO es null: parsearlo a array denuevo --> json.parse (lo que me devolvio el get item)
//    -->[array].push(id) --> json.stringify([array])--> set.item("favoritos", lo que stringificamos)
// - si ES null: 