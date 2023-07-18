/* eslint-disable no-unused-vars */
/* Lo primero que debe hacerse en cada archivo react */
import React from "react"; /* a los componentes los llamamos con Mayuscula por buenas prácticas */
import "./Button.css"

const Button = () => {
    
    const saludar = () => {
        alert("Hola")
      }
    return (
        <button onClick = {saludar} className = "btn"> Click </button>
    )
}

/* Paso que se debe realizar al final */
export default Button