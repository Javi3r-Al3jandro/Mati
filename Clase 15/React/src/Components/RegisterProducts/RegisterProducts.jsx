import React, { useState } from 'react'



const RegisterProducts = () => {

    const opciones = ["juegos", "tecnologia", "hogar", "electrodomésticos"]
    const handleSubmitRegisterProduct = (evento) => {
        evento.prevent.default()
    }

    const [products, setProducts] = useState([])

  return (
    <div className='formularioUsuario'>
        <h1>Registro de productos en React</h1>
        <form onSubmit={handleSubmitRegisterProduct}>
            <label htmlFor="nombre"> Ingrese el nombre de su producto: </label>
            <input type="text" placeholder='Carta especial 32' name='nombre' id='nombre'/>
            <label htmlFor="categoria"> Ingrese la categoría del producto: </label>
            <select name="categoria" id="categoria">
                {opciones.map((opcion) => <option value={opcion} key={opcion}> {opcion} </option>)}
            </select>
            <label htmlFor="precio">Ingrese el costo del producto:</label>
            <input type="number" name="precio" id= "precio"/>
            <label htmlFor="envios">Acepta envios:</label>
            <input type="checkbox" name="envios" id="envios" />
            <label htmlFor="thumbnail">Ingrese la direccion de la imagen:</label>
            <input type="text" name='thumbnail' id='thumbnail' />
            <input type="submit" value="registrar" />
        </form>
        <div>
            <h2>Producto: nombre</h2>
            <h3>Precio: $50000</h3>
            <div>
                Acepta envios: SI o NO
            </div>
            <div>
                <img src="https://a.espncdn.com/photo/2023/0719/r1199572_1296x518_5-2.jpg" alt="nombre del producto" width={"200px"}/>
            </div>
            <div>
                <b>Categoria:</b> categoria
            </div>
        </div>
    </div>
     )
   }

export default RegisterProducts