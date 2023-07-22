/* CLASE CONTEXTO Y ROUTING*/
/* La idea principal del contexto es manejar los estados. Osea que agrupa los estados de cada componente y
los comparte tanto con app como con los mismos componentes */
/* use context es un hook que dado un contexto devuelve los valores que trae dicho contexto*/
import React,{createContext, useContext, useState} from 'react'

const Context = createContext()



/* children es el html que ponemos dentro del componente App*/
/* recibe a children */
const ContextProvider = ({children}) => {
    /* let nombre = "pepe" */
    const products =[
        {
            nombre: 'monitor curvo samsung 24"',
            precio: 90000,
            id:1,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
            {
            nombre: 'monitor curvo samsung 27"',
            precio: 120000,
            id:2,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "    
            },
            {
            nombre: 'monitor curvo samsung 29"',
            precio: 140000,
            id:3,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " 
            },
    ]

const getProductById = (id) => {
    return products.find(producto => producto.id ==id)
}



/* Carrito */
const [cart, setCart] = useState([])

const addProductCart= (id) => {
    /* hace la copia de cart y suma el getProductByid */
    setCart([...cart, getProductById(id)])
}





  return (
    /* usa a children */
    <Context.Provider value = {{products, getProductById, cart, addProductCart}}>
        {children}
    </Context.Provider>
  )
}


export const useCustomContext = () => useContext(Context)

export default ContextProvider