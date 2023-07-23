/* CLASE CONTEXTO Y ROUTING*/
/* eslint-disable no-unused-vars */
import React from "react"

import { Cartpage, ContactPage, DetailPage, HomePage} from "./Components/Screens"
import { NavLink, Route, Routes } from "react-router-dom"


const App = () => {

    return (
      <div>
        <nav>
          <NavLink to="/cart">Ir al carrito</NavLink>
          <NavLink to="/">Ir al Home</NavLink>
          <NavLink to="/contact">Ir a contacto</NavLink>
        </nav>
        <Routes>
          <Route path= "/" element={<HomePage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          <Route path="/cart" element={<Cartpage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </div>
    )
}

export default App

 


