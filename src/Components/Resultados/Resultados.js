import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            cargando: true,
        };
    }

    componentDidMount() {
        this.setState({ cargando: true });

        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=9458a99baf5a9ba3fe341cd43217ef95`)
        .then((resp) => resp.json())
            .then((data) => {
                setTimeout(() => this.setState({ 
                    peliculas: data.results, 
                    cargando: false 
                }), 3000);
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Resultados de búsqueda:</h1>
                <section>
                    {this.state.peliculas.length === 0 ? (
                        <h2>No hay resultados para: "{this.props.location.state.query}"</h2>
                    ) : (
                        this.state.cargando ? (
                            <h3>Cargando...</h3>
                        ) : (
                            this.state.peliculas.map((elm) => (
                                <Pelicula elm={elm} url={this.props.url} />
                            ))
                        )
                    )}
                </section>
            </div>
        );
    }
}

export default Resultados;