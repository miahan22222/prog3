import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

class Pelicula extends Component {

    constructor(props) {
        super(props)
        this.state = {
            VerDesc: false,
            fav: false
        }
    }

    cambiarVerDesc() {
        if (this.state.VerDesc === false) {
            this.setState({
                VerDesc: !this.state.VerDesc,
            })
        } else {
            this.setState({
                VerDesc: !this.state.VerDesc,
            })
        }
    }

    componentDidMount() {
        const storage = localStorage.getItem("categoriaFavs");
        if (storage !== null) {
            const favs = JSON.parse(storage);
            const esFavorito = favs.includes(this.props.elm.id)
            if (esFavorito) {
                this.setState({ fav: true })
            }
        }
    }

    agregarAStorage() {
        let storage = localStorage.getItem("categoriaFavs")
        if (storage !== null) {
            let favs = JSON.parse(storage);
            favs.push(this.props.elm.id)
            let storageStringificado = JSON.stringify(favs)
            localStorage.setItem("categoriaFavs", storageStringificado);
            this.setState({ fav: true });
        }

    }

    quitarStorage() {
        let storage = localStorage.getItem("categoriaFavs")
        if (storage) {
            let favs = JSON.parse(storage);
            const updatedFavs = favs.filter(favId => favId !== this.props.elm.id);
            localStorage.setItem("categoriaFavs", JSON.stringify(updatedFavs));
            this.setState({ fav: false });
        }
    }



    render() {
        const { elm } = this.props;
        console.log(this.props.elm);

        return (
            <div className="card1">
                <img className="imagen" src={`https://image.tmdb.org/t/p/w342${elm.poster_path}`} alt="" />
                <h1>{elm.title} </h1>
                <br></br>
                <section className="info">
                    <Link to={`/detalle/${this.props.elm.id}`} className="detalle"> Dirigir al detalle  </Link>
                    {
                        this.state.VerDesc ?
                            <p>  {elm.overview}</p>
                            : null
                    }
                    <button className="enviar" onClick={() => this.cambiarVerDesc()} > {this.state.VerDesc ? "Ocultar Descripcion" : "Ver Descripcion"} </button>
                    <button className="enviar" onClick={() => !this.state.fav ? this.agregarAStorage() : this.quitarStorage()}> {this.state.fav ? "Sacar de favoritos" : "Agregar a favoritos"}
                    </button>

                </section>



            </div>
        )
    }
}

export default Pelicula