import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }



    formChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    evitarSubmit(event) {
        event.preventDefault()
        this.props.history.push("/resultados", { query: this.state.query });
    }




    render() {
        return (
            <div>
                <form onSubmit={(e) => this.evitarSubmit(e)} className="formulariocaja">
                    <input
                        className="form"
                        onChange={(e) => this.formChange(e)}
                        value={this.state.query}
                        placeholder="Buscar película"
                    />
                    <button className="enviar">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Search;

