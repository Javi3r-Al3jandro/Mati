/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Lo primero que debe hacerse en cada archivo react */
import React from "react"; /* a los componentes los llamamos con Mayuscula por buenas prácticas */
import "./Button.css"

//PROPIEDADES

//estructurado

/* const Button = (props) => {

    return (
        <button onClick = {props.funcion} className = "btn"> Click </button>
    )
} */




//desestructurado

const Button = ({funcion, type}) => {
    return (
        <button onClick = {funcion} className = {"btn" + type}> Click </button> /* si solo dice "btn" toma esa clase pero
                                                                                al poner + type se concatena la clase */
    )
}


/* Paso que se debe realizar al final */
export default Button