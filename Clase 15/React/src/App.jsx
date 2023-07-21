/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import "./App.css"
import { } from './Components'
import Calculator from './Components/Calculadora/Calculator'
import RegisterProducts from './Components/RegisterProducts/RegisterProducts'





/* FORMULARIO CONTROLADO */


const App = () => {

/* Sexto (reseteo) */
const [userData, setUserData] = useState({})

/* Tercero */
  const [formUserData, setformUserData] = useState({nombre:"", apellido:"", email:""})

  /* Quinto */
  const [showPersonalData, setshowPersonalData] = useState(false)

  /* Primero */
  const handleRegisterUser = (evento) => {
    evento.preventDefault()
    console.log(evento)
    setshowPersonalData(true)
    setUserData(formUserData)
    setformUserData({nombre:"", apellido:"", email:"" })
  }

  /* Cuarto */
  const handleChangeRegisterUser = (evento) => {
    console.log(evento.target.name)
    console.log(formUserData)
    setformUserData({...formUserData, [evento.target.name]:evento.target.value})
  }


/* Segundo junto con los estilos*/
    return (
      <>
        <form onSubmit={handleRegisterUser} className='formularioUsuario'>
          <label htmlFor="nombre">Ingrese su nombre:</label>
          <input placeholder= "Ingrese el nombre" name= "nombre" id="nombre" onChange={handleChangeRegisterUser} value={formUserData.nombre}/>
          <label htmlFor="apellido">Ingrese su apellido:</label>
          <input type="text" placeholder="ingrese el apellido" name= "apellido" id= "apellido" onChange={handleChangeRegisterUser} value={formUserData.apellido}/>
          <label htmlFor="email">Ingrese su email:</label>
          <input type="email" placeholder='cosmefulanito@gmail.com' name= "email" id='email' onChange={handleChangeRegisterUser} value={formUserData.email}/>
          {showPersonalData ? <button>Editar</button> : <button type='submit'>Enviar</button>}
        </form>
        {
          showPersonalData &&
          <div>
            <h2>Nombre de usuario: {userData.nombre} {userData.apellido} </h2>
            <div>
              <b>Email:</b> {userData.email}
            </div>
          </div>
        }

        <Calculator/>
        <br />
        <br />
        <RegisterProducts/>
      </>
    )
}

export default App




