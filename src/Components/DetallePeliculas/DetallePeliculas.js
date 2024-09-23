import React, { Component } from "react";

class DetallePeliculas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fav: false
    }
  }



  render() {
    let genres = this.props.peli.genres
    return (<div >
      <h1>{this.props.peli.title} </h1>
      <img src={`https://image.tmdb.org/t/p/w342${this.props.peli.poster_path}`} alt="" />
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



    </div>





    )
  }
}


export default DetallePeliculas;