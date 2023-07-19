/* eslint-disable no-unused-vars */
import React from 'react'
import "./App.css"
import { Button , Input, Background } from './Components'


//funcion escrita de forma antigua
/* function App() { */
//pasado a forma actual
const App = () => {
      const saludar = () => {
        alert("Hola")
  }
  const despedida = () => {
    alert("Adios")
}



  return (
    <>
        <div className="titulo">
          <Background>                
            <h1 style={{color: "white"}}>Hola desde React</h1>
            <h2 style={{color: "red"}}>Hola desde React</h2>
          </Background>
        </div>
        <div>
          
          <Button funcion={saludar}/> 
          {/* para este boton se utilizaron dos prop. funcion y type */}
          <Button funcion={despedida} type= "btn-dark"/>
          <Input/>
        </div>
        <label htmlFor=""></label>

        
    </>
  )
} 

export default App
