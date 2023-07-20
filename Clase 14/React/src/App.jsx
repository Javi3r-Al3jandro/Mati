/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import "./App.css"
import { ItemListContainer } from './Components'
/* HOOK (enganchar), se utiliza para avisar que se realizo un cambio y se debe actualizar la app
para mostrarlos en el html */

/* Contador sumador */

const App = () => {
  const [contador, setContador] = useState(0)
  const [mensaje, setMensaje] = useState("")
  const [password, setPassword] = useState("")

    const incrementar = () => {
      setContador(contador != 10 ? contador + 1 : contador)
  }
  
  const decrementar = () => {
    setContador(contador != 1 ? contador - 1 : contador)
}

const actualizarInput = (text) => {
  setMensaje(text)
}

const palabrasProhibidas = ['1234', 'admin', '0000']
const validarPassword = () => palabrasProhibidas.some((palabra) => palabra == password)





    return (
      <>
      <div className='contenedorContador'>
      <button className='btn' onClick={decrementar}>-</button>
      <span style={{fontSize: "24px"}}>{contador}</span>
      <button className='btn' onClick={incrementar}>+</button>
      </div>
      <div>
        {/* Con event.target.value capturamos el evento (en este caso onChange)y le pedimos 
          que nos de el valor del target (codigo de react) para que actualice lo que escribimos */}
        <input placeholder='Escriba un mensaje' value={mensaje} onChange ={ (event) => actualizarInput(event.target.value)}/>
        {/* renderizado condicional: encierro al button entre llaves para que aparezca cuando se escriba algo en el input */}
        {mensaje.length > 0 && <button>Enviar</button>}
        <br />

        <br />
        <input type='password' placeholder='Escriba su contraseña' value = {password} onChange ={ (event2) => setPassword(event2.target.value)}/>
        {validarPassword() && <span style={{color: 'red', fontWeight: 500}}>Has utilizado una contraseña invalida</span>}
        
      </div>

      <ItemListContainer/>
      </>
    )
}



export default App
/* EJERCICIO */
/* Crear un input de contraseña, si el usuario escribe alguna de la sig palabras debera aparecer
un error en pantalla como el siguiente
  const palabrasProhibidas = ['1234', 'admin', '0000']*/
        {/* <span style={{color: 'red', fontWeight: 500}}>Has utilizado una contraseña invalida</span> */}



