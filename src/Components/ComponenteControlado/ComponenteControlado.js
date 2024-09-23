import React, { Component} from 'react'
import "./style.css";

class ComponenteControlado extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput1: ''
        }
    }

    evitarSubmit(event){
        console.log(event)
        event.preventDefault()
    }

   
    controlarInputs(event){
        this.setState({
            valorInput1: event.target.value
        }, () => this.props.filtrarPeliculas(this.state.valorInput1)
        )

    }

    render(){
        return(
            <div >
                <form  className="formulariocaja" onSubmit={(event) => this.evitarSubmit(event)} >
                    <input className="form"
                        onChange={(event)=> this.controlarInputs(event)} 
                        value={this.state.valorInput1}
                        placeholder='Filtrar peliculas'
                        
                    />
                    <button className="enviar" type='submit'>Enviar</button>
                </form>
            </div>
        )
    }

}

export default ComponenteControlado