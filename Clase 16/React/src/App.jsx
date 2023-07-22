/* CLASE CONTEXTO Y ROUTING*/
/* eslint-disable no-unused-vars */
import React from "react"
import { useCustomContext } from "./ContextManager/ContextProvider"
import { ProductCard } from "./Components"
import { Cartpage, DetailPage, HomePage } from "./Components/Screens"
import { NavLink, Route, Routes } from "react-router-dom"


const App = () => {

    return (
      <div>
        <NavLink to="/cart">Ir al carrito</NavLink>
        <NavLink to="/">Ir al Home</NavLink>
        <Routes>
          <Route path= "/" element={<HomePage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          <Route path="/cart" element={<Cartpage/>}/>
        </Routes>
      </div>
    )
}

export default App

 


