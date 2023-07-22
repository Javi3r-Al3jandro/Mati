import React from 'react'
import { useCustomContext } from '../../../ContextManager/ContextProvider'
import ProductCard from '../../ProductCard/ProductCard'

const Cartpage = () => {
    const {cart} = useCustomContext()
    console.log(cart)
  return (
    <div>
      Cartpage
      <div>
        {cart.map(product => (
          <ProductCard producto={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default Cartpage