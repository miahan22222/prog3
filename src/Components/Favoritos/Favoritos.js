import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./style.css";

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
            Promise.all(
                arrParseado.map(id =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9458a99baf5a9ba3fe341cd43217ef95`)
                        .then((resp) => resp.json())
                ))

                .then((data) => {
                    this.setState({
                        favs: data
                    })
                })
                .catch((err) => console.log(err))


        }

    }


    render() {
        return (
            <>
                <h1>Favoritos:</h1>
                <div className='card-container'>

                    {this.state.favs.length === 0 ? (
                        <p> No tienes peliculas favoritas</p>)
                        :
                        (this.state.favs.map((elm, idx) => (<Pelicula key={idx} elm={elm} />)))}
                </div>

            </>


        )
    }

}

export default Favoritos;
