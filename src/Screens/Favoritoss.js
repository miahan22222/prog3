import React from "react";
import Favoritos from "../Components/Favoritos/Favoritos";

function Favoritoss() {
    return (

        <div>

            
            <Favoritos />
        </div>

    )
}

export default Favoritoss;




//local storage: para que persista en el tiempo / session storage: para solo la sesion
//favoritos--> agregar(id): traer la propiedad q me interesa --> get item("favoritos") --> valido si es null o no
// - si NO es null: parsearlo a array denuevo --> json.parse (lo que me devolvio el get item)
//    -->[array].push(id) --> json.stringify([array])--> set.item("favoritos", lo que stringificamos)
// - si ES null: 