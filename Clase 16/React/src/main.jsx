/* CLASE CONTEXTO Y ROUTING*/
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './ContextManager/ContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

//para utilizar imagenes: se guardan y luego se importa: 
//import "nombre de imagen" from "directorio donde guardamos imagen"
//por último en el src de img ponemos {nombre de la imagen}


ReactDOM.createRoot(document.getElementById('root')).render(
    /* Todo el componente BrowserRouter debe englobar a ContexProvide y a App */
    /* Todo el componente APP se ve afectado por los de ContextProvider */

    <BrowserRouter>
    <ContextProvider>
        <App />
    </ContextProvider>
    </BrowserRouter>
)




