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
            nombre: 'monitor curvo samsung 24',
            precio: 90000,
            id:1,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
            {
            nombre: 'monitor curvo samsung 27',
            precio: 120000,
            id:2,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "    
            },
            {
            nombre: 'monitor curvo samsung 29',
            precio: 140000,
            id:3,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " 
            },
            {
            nombre: 'celular Iphone',
            precio: 500000,
            id:4,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " 
            },
    ]


const getProductById = (id) => {
    return products.find(producto => producto.id === Number(id))
}

const getProductCartById = (id) => {
    return cart.find(producto => producto.id === Number(id))
}



/* Carrito */
const [cart, setCart] = useState([])



/* De esta forma tenemos el problema que al seleccionar un producto dos veces
se renderiza por separado */
/* funcion para añadir los productos al carrito */
/* const addProductCart= (id) => { */
    /* hace la copia de cart y suma el getProductByid */
/*     setCart([...cart, getProductById(id)])
} */


/* de esta forma la cambiamos */
const isInCart = (id) => cart.some(producto => producto.id === Number(id))

const addProductCart = (id, quantity) => {
    if(isInCart(id)){
        setCart(cart.map( product => {
            if(product.id == id){
                product.quantity = quantity
            }
            return product
        }))
    }else{
        setCart([...cart, {...getProductById(id), quantity : quantity}])
    }
}


const getTotal = () => {
    let total = 0
    cart.forEach(producto => total += producto.precio * producto.quantity)
    return total
}


  return (
    /* usa a children */
    <Context.Provider value = {{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
  )
}


export const useCustomContext = () => useContext(Context)

export default ContextProvider