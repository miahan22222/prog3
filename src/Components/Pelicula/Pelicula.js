import React, {Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

class Pelicula extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            VerDesc: false,
            fav: this.esFav(props.elm.id),
        }
    }
    cambiarVerDesc(){
        if (this.state.VerDesc === false) {
        this.setState({
          VerDesc: !this.state.VerDesc,
        })
    }else{
        this.setState({
            VerDesc: !this.state.VerDesc,
    })
        }
    }
    esFav(id) {
        const storage = localStorage.getItem("categoriaFavs");
        return storage ? JSON.parse(storage).includes(id) : false;
    }
    agregarAStorage(id){
       let storage = localStorage.getItem("categoriaFavs")
       let favs = []; // favs como un array vacío

       if (storage !==null) {
           favs = JSON.parse(storage); // Solo parsea si hay algo en storage
       }
        if (!favs.includes(id)) {
            favs.push(id);
            let storageStringificado = JSON.stringify(favs)
            localStorage.setItem("categoriaFavs", storageStringificado);
            this.setState({ fav: true });
        }

      }
      quitarStorage(){
        let storage = localStorage.getItem("categoriaFavs")
        if (storage) {
            let favs = JSON.parse(storage);
            const updatedFavs = favs.filter(favId => favId !== this.props.elm.id);
            localStorage.setItem("categoriaFavs", JSON.stringify(updatedFavs));
            this.setState({ fav: false });
        }}


    botonFav() {
        const { elm } = this.props;
        if (this.state.fav) {
            this.quitarStorage();
        } else {
            this.agregarAStorage(elm.id);
        }
    }
 
    render () {
        const { elm } = this.props;
        console.log(this.props.elm)  ;
    return (
        <div className="card1">                
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342${elm.poster_path}`} alt=""/>
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
                <button className="enviar" onClick={() => this.botonFav()}> {this.state.fav ? "Sacar de favs" : "Agregar a favs"}
                    </button>

            </section>          
                 
                    

        </div>
    ) }
} 

export default Pelicula