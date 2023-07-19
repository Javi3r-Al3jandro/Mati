/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//para utilizar imagenes: se guardan y luego se importa: 
//import "nombre de imagen" from "directorio donde guardamos imagen"
//por último en el src de img ponemos {nombre de la imagen}


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

/* COMPONENTES y PROPIEDADES */

//Existen dos tipos: funcionales y de clase (de clase no se ven en la cursada)
//Los componentes los escribimos con la primera letra en mayusculas por buenas prácticas
//Al crear la carpeta components y el archivo JS ponerle de nombre index
//Siempre donde vamos a escribir un componente hacemos import react from react


