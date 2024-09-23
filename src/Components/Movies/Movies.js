import React, { Component } from 'react'
import ComponenteControlado from '../ComponenteControlado/ComponenteControlado'
//import {Link} from 'react-router-dom'
import Pelicula from '../Pelicula/Pelicula'
import "./style.css";
// import Search from '../Search/Search';
import Gif from '../Gif/Gif';


class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas:[],
            peliculasBackup: [],
            pelisMostradas: props.limit,
            paginaACargar: 2
        }
        

    }
    filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculasBackup.filter(
            (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()) 
        )

        this.setState({
            peliculas: peliculasFiltradas
        })
        
    }

    componentDidMount(){
        fetch(this.props.endpoint)
        .then((resp) => resp.json())
        .then((data) => {
            console.log('data', data)
            setTimeout(() => this.setState({ 
                peliculas: data.results, 
                peliculasBackup: data.results
            }), 3000) 
            

        })
        .catch((err) => console.log(err))

    }

    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95&page=${this.state.paginaACargar}`)
        .then((resp) => resp.json())
        .then((data) => 
            this.setState({peliculas: this.state.peliculas.concat(data.results), peliculasBackup: this.state.concat(data.results),paginaACargar: this.state.paginaACargar + 1 })) 
        .catch((err) => console.log(err))
      
       ;
    }



    

    render(){
        return (
            <div >
                
                <h2>{this.props.titulo}</h2>
                 {this.props.mostrarComponenteControlado && (
                    <ComponenteControlado  filtrarPeliculas={ (nombre) => this.filtrarPeliculas(nombre) } />
                )}
                {/* // (
                //     <Search history={this.props.history}/>
                // )} */}

                <section className='card-container'>
                {this.state.peliculas.length === 0 ?
                (
                    <Gif/>
                )
                :
                (
                    this.state.peliculas.slice(0,this.state.pelisMostradas).map((elm)=> (<Pelicula elm = {elm} url={this.props.url}/>))
                )
                }
                
                </section>
                <section className="boton">
                    {this.props.cargarMas && this.state.pelisMostradas < this.state.peliculas.length ? ( 
                            <button className='cargar ' onClick={() => this.cargarMas()}>Cargar más películas</button>
                        ): null}
                    </section>
            </div>
   
        )
    }
}

export default Movies