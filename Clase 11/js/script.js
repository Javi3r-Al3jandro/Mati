//LOCAL STORAGE 

//Guardar en local storage
/* const btnSave = document.getElementById("btn-save")
btnSave.addEventListener("click", () => {
    localStorage.setItem("random", "valor random")
} ) */


//Eliminar algo de local storage

/* const btnDelete = document.getElementById("btn-delete")
btnDelete.addEventListener("click", () => {
    localStorage.removeItem("random")
}) */

//Resetear local storage

/* localStorage.clear() */

//Leer algo del local storage

/* console.log(localStorage.getItem("random")) */ 

const productos = [
    {
        name: "pc gamer",
        price: 400,
        id: 1
    },
    {
        name: "parlantes",
        price: 30,
        id: 2
    },
    {
        name: "mouse logitech",
        price: 65,
        id: 3
    }
]


//Busqueda de elemento por clase
//Con el for of hacemos que los botones sean independientes 
//con el id del button hacemos que por cada click nos devuelva el mismo producto que clickeamos

const productosHTML = document.getElementById("productos")
const carrito = []

const renderizarProductos = () => {
    productos.forEach((product) => { 
        productosHTML.innerHTML += `
        <div>
            <h2>${product.name}</h2>
            <span><b>Price:</b>${product.price}</span><br>
            <br>
            <button class="btn-comprar" id="btn-comprar-${product.id}">Buy</button>
            <hr>
        </div>
        `    
    })


    const botonesComprar = document.getElementsByClassName("btn-comprar")
    for(const boton of botonesComprar){
        boton.addEventListener( "click", ( ) => {

            //El splice lo utilizamos en este caso para obtener el numero de id
            const idProduct= Number(boton.id.split("-").pop())

            /* Con esto tenemos un array. cada elemento es el dato de cada producto, lo pasamos a string
            y el dato obtenido lo pasamos a JSON */

            carrito.push(productos.find(producto => producto.id === idProduct))
            localStorage.setItem("carrito" , JSON.stringify(carrito))
            console.log (JSON.parse(localStorage.getItem("carrito")))
        })
    }
}
    
renderizarProductos()


const ultimoCarrito = JSON.parse(localStorage.getItem("carrito"))

if(ultimoCarrito){
    ultimoCarrito.forEach(product => {
        carrito.push(product)
    })
}else {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}









