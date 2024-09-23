import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./style.css";
import Gif from "../Gif/Gif";

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []
        };
    }

    componentDidMount() {
        console.log('props results', this.props)
        const loquebusca = this.props.history.location.state.query
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=9458a99baf5a9ba3fe341cd43217ef95&query=${loquebusca}`)
        .then((resp) => resp.json())
            .then((data) => {
                console.log("data", data)
                setTimeout(() => this.setState({ 
                    resultados: data.results
                }), 3000);
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Resultados de búsqueda de:"{this.props.history.location.state.query}"</h1>
                <section className='card-container'>
                    {this.state.resultados.length > 0 ?  
                    
                    this.state.resultados.map((elm) => (
                                <Pelicula elm={elm} url={this.props.url} />
                            ))
                    :
                    (
                        <div>
                            <Gif/>
                            <h2>No hay resultados para:"{this.props.history.location.state.query}"</h2>
                        </div>
                    )}
                </section>
            </div>
        );
    }
}

export default Resultados;