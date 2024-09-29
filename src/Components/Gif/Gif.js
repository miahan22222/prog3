import React, { Component } from 'react';

class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gif: ""
        };
    }

    componentDidMount() {
        this.traerGifnuevo();
    }

    traerGifnuevo = () => {
        fetch("https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gif: data.data.images.original.url
                });
            })
            .catch(error => console.log(error));
    };

    render() {
        let contenido;
        if (this.state.gif === "") {
            contenido = <h3>Cargando Gif Animado...</h3>;
        } else {
            contenido = <img src={this.state.gif} alt="Gif" />;
        }

        return (
            <div>
                {contenido}

            </div>
        );
    }
}

export default Gif;
