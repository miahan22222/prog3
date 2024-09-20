import React, { Component } from "react";
import { withRouter } from "react-router-dom";  // Importar withRouter

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

    formSubmit(event) {
        event.preventDefault();

            this.props.history.push("/resultados", { query: this.state.query });
        }
    

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit()}>
                    <input
                        className="form"
                        onChange={this.formChange()}
                        value={this.state.query}
                        name="query"
                        placeholder="Buscar película"
                    />
                    <button className="enviar" onClick={() => this.formSubmit()}>Buscar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Search);  // Exportar envuelto en withRouter

