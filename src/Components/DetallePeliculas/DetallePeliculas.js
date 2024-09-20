import React, {Component} from "react";

class DetallePeliculas extends Component {
  constructor(props){
    super(props)
    this.state = {
        fav:false
    }
  }
  componentDidMount(id){
    let storage = localStorage.getItem("categoriaFavs")
    if(storage !==null){
        let arrParseado = JSON.parse(storage)
        let estaMiId = arrParseado.includes(id)
        if (estaMiId){
            this.setState({
                fav: true
            })
        }
    }

}
agregarAStorage(id){
  let storage = localStorage.getItem("categoriaFavs")
  if (storage!==null){
      let storageParseado = JSON.parse(storage)
      storageParseado.push(id)
      let storageStringificado = JSON.stringify(storageParseado)
      localStorage.setItem("categoriaFavs", storageStringificado)
  } else{
      let arrFavs =[id]
      let favStringificado =JSON.stringify(arrFavs)
      localStorage.setItem("categoriaFavs", favStringificado)
  }
  this.setState({
      fav: true
  })
}
quitarStorage(id){
  let storage = localStorage.getItem("categoriaFavs")
  let storageParseado = JSON.parse(storage)
  let sacoFavoritos = storageParseado.filter((id) => id!== id)
  let favStringificado = JSON.stringify(sacoFavoritos)
  localStorage.setItem("categoriaFavs", favStringificado)
  this.setState({
    fav: false
})

}

  render(){
   // const id = this.props.data.id
   let genres = this.props.peli.genres
    return(<div >                
            <h1>{this.props.peli.title} </h1>
            <img src={`https://image.tmdb.org/t/p/w342${this.props.peli.poster_path}`} alt=""/>
            <br></br>
            <p>Sinopsis: {this.props.peli.overview}</p>
            <p>Duracion: {this.props.peli.runtime}</p>
            <p>Rating: {this.props.peli.vote_average}</p>
            <p>Fecha de estreno: {this.props.peli.release_date}</p>
            <p>Generos:
              <ul>
                {genres.length > 0 
                ?
                (genres.map((genre) => <li>{genre.name}</li>))
                :
                null
                }
              </ul>
            </p>
           
                <button onClick={()=> !this.state.esFavorito ? this.agregarAStorage() : this.quitarStorage()}>
                  {this.state.fav ? "Sacar de favs" : "Agregar a favs"}
            
                    </button>
                       
        </div>
        
               
               
 
          
    )
     }
  }
  

export default DetallePeliculas;