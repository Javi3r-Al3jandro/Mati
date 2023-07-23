import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../../ContextManager/ContextProvider'
import ProductCard from '../../ProductCard/ProductCard'

const HomePage = () => {

    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState("")
    const [max, setMax] = useState("1000000")
    const [min, setMin] = useState("0")

    const [currentProducts, setCurrentProducts] = useState(products)

    useEffect(() => {
      setCurrentProducts(products.filter(
        producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) && producto.precio >= min && producto.precio <= max
        ))
    }, [searchProduct, max, min])

  return (
    <div>
        <h1>Lista de productos</h1>
          <input type="text" placeholder='Busca el nombre del producto' value={searchProduct} 
          onChange={(e) => setSearchProduct(e.target.value)} />
          <div>
            <h2>Precio</h2>
            <div>
              <input type='text' value={min} onChange= {(e) => setMin(Number(e.target.value))}/>
              <input type='text' value={max} onChange= {(e) => setMax(Number(e.target.value))}/>
            </div>
          </div>
        <div>            
            {
            currentProducts.length > 0 ?
            currentProducts.map(producto => (
              /* dado un producto nos renderiza nuestro producto */
            <ProductCard producto={producto} key = {producto.id}/>
            ))
            :
            <h2>No se encuentra ningun producto con esos datos</h2>
          }
        </div>
    </div>
  )
}

export default HomePage