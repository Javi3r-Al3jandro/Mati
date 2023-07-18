/* eslint-disable no-unused-vars */
import React from 'react'
import "./App.css"
/* Importar el archivo button para que funcione el boton */
import Button from './button'

//funcion escrita de forma antigua
/* function App() { */
//pasarlo a forma actual
const App = () => {

  return (
    <>
        <div className="titulo">
        <h1>Hola desde React</h1>
        </div>
        <div>
          <Button></Button>
        </div>
        <label htmlFor=""></label>
    </>
  )
} 

export default App
