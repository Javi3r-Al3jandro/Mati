import React from 'react'
import { useCustomContext } from '../../../ContextManager/ContextProvider'
import ProductCard from '../../ProductCard/ProductCard'
import ProductCartCard from '../../ProductCartCard/ProductCartCard'

const Cartpage = () => {

  /* obtenemos el carrito del contexto (el contexto esta en context provider
    donde se creo el estado cart) */
    const {cart, getTotal} = useCustomContext()
    console.log(getTotal())
  return (
    <div>
      {cart.length > 0
      ?
      <>
        <div>
          {cart.map(product => (
            <ProductCartCard key= {product.id} producto={product}/>
          ))}
        </div>

        <div>
        Total: ${getTotal()}
        </div>
      
      </>
      :
      <h1>No has comprado nada aun</h1>
    }
  </div>
  )
}

export default Cartpage