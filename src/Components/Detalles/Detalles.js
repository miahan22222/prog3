import React, { Component } from "react";
import DetallePeliculas from "../DetallePeliculas/DetallePeliculas";
import "./style.css";
import Gif from "../Gif/Gif";

class Detalles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peli: null
    }
  }


  componentDidMount() {
    const APIKEY = '9458a99baf5a9ba3fe341cd43217ef95'

    fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${APIKEY}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({
        peli: data
      }))

      .catch((err) => console.log(err))
  }


  render() {
    return (
      <div className="container">
        {this.state.peli === null ? (
          <Gif />
        ) : (
          <div className="detalle-pelicula">
            <DetallePeliculas peli={this.state.peli} />
          </div>
        )}
      </div>
    )
  }
}



export default Detalles