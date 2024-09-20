import React, { Component } from 'react'
import ComponenteControlado from '../ComponenteControlado/ComponenteControlado'
//import {Link} from 'react-router-dom'
import Pelicula from '../Pelicula/Pelicula'
import "./style.css";
// import Search from '../Search/Search';



class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas:[],
            pelisMostradas: this.props.limit
        }
        

    }

    componentDidMount(){
        fetch(this.props.endpoint)
        .then((resp) => resp.json())
        .then((data) => {
            setTimeout(() => this.setState({ 
                peliculas: data.results
            }), 3000) 
            

        })
        .catch((err) => console.log(err))

    }

    cargarMas() {
        this.setState((prevState) => ({
            pelisMostradas: prevState.pelisMostradas + 5 
        }));
    }


    filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculas.filter(
            (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()) 
        )

        this.setState({
            peliculas: peliculasFiltradas
        })
        
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
                    <h3>Cargando...</h3>
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