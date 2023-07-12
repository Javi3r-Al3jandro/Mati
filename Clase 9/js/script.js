//DOM: document objet model

//Es una interfaz que nos proporciona js para manejar el html
//Nos permite modificar el HTML desde JS sin modificar nuestro HTML real, es decir


//muestra por consola el objeto "document". Muestra el detalle del documento
/* document.querySelector(".titulo")*/

//método de busqueda de elementos (h1, body, script, etc)
/* document.querySelector(".titulo")*/

//crea un const (por ser objeto) para que no se pueda reasignar el objeto
//Utilizamos .innertext para cambiar el html
/* const tituloHTML = document.querySelector(".titulo")*/

//Reasignamos la propiedad del innerText
/* tituloHTML.innerText = "Hola mundo desde el DOM" */




//Se puede crear elementos de HTML en JS creando la etiqueta desde el string

const containerHTML = document.querySelector("#container")

/* containerHTML.innerHTML = "<h1> Hola mundo </h1>"*/

//otro ejemplo

/* const usuario = {
    nombre: "pepe",
    apellido: "grillo",
    edad: 33
} */

/* containerHTML.innerHTML = `
<div>
    <h2>${usuario.nombre} ${usuario.apellido}</h2>
    <span>
        <b>Edad:</b>${usuario.edad}
    </span> 
    <hr>
</div>    
` */
    
//repetimos lo anterior para verlo dos veces(acumulador). utilizando en ambos casos template String

/* containerHTML.innerHTML = containerHTML.innerHTML + `
<div>
<h2>${usuario.nombre} ${usuario.apellido}</h2>
    <span>
        <b>Edad:</b>${usuario.edad}
    </span> 
    <hr>
</div>
` */

//Otro ejemplo con arrays

/* const usuarios = [
    {
        nombre: "pepe",
        apellido: "grillo",
        edad: 33
    },
    {
        nombre: "juan",
        apellido: "sanchez",
        edad: 67
    },
    {
        nombre: "lucas",
        apellido: "perez",
        edad: 70
    },
    {
        nombre: "vicente",
        apellido: "montes",
        edad: 30
    }
] */

/* usuarios.forEach((usuario) => {
    containerHTML.innerHTML = containerHTML.innerHTML + `
<div>
    <h2>${usuario.nombre} ${usuario.apellido}</h2>
    <span>
        <b>Edad:</b>${usuario.edad}
    </span> 
    <hr>
</div>    
`
}) */

/* for(const usuario of usuarios) {
    containerHTML.innerHTML = containerHTML.innerHTML + `
<div>
    <h2>${usuario.nombre} ${usuario.apellido}</h2>
    <span>
        <b>Edad:</b>${usuario.edad}
    </span> 
    <hr>
</div>    
`
} */


//EJERCICIO PROPUESTO 
//Copiar la página que escribió mati

/* const equipos = [
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50
    },
]
 */
/* equipos.forEach((equipo) => {
    containerHTML.innerHTML = containerHTML.innerHTML + `
<div>
    <h2>${equipo.marca} ${equipo.modelo}</h2>
    <span>
        <b>Precio:</b>${equipo.precio}
        <br>
        <br>
        <b>Stock Disponible:</b>${equipo.stock}
    </span> 
    <br>
    <br>
    <button> Ver detalle </button>
    <hr>
</div>    
`
}) */


//ESTILOS DE LA PAGINA USANDO HTML-CSS-JS

/* const equipos = [
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50
    },
]

equipos.forEach((equipo) => {
    containerHTML.innerHTML = containerHTML.innerHTML + `
        <div class="productCard">
            <h2>${equipo.marca} ${equipo.modelo} </h2>
            <span><b>Precio</b>$${equipo.precio}</span>
            <span><b>Stock disponible:</b>$${equipo.stock}</span>
            <button class="btn">Ver detalle</button>
        </div>
        `
})
 */




//Eliminamos un elemento de nuestro array para mostrarlos luego en pantalla
//Esto se lo conoce como estado y reacción

const equipos = [
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 560000,
        stock: 50,
        id: 1,
        img:"https://saturnohogar.com.ar/4051/celular-motorola-moto-g222-$-gb-y-128gb-celeste.jpg"
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 570000,
        stock: 50,
        id: 2,
        img:"https://saturnohogar.com.ar/4051/celular-motorola-moto-g222-$-gb-y-128gb-celeste.jpg"
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 580000,
        stock: 50,
        id: 3,
        img:"https://saturnohogar.com.ar/4051/celular-motorola-moto-g222-$-gb-y-128gb-celeste.jpg"
    },
    {
        marca: "Motorola",
        modelo: "G8",
        precio: 590000,
        stock: 50,
        id: 4,
        img:"https://saturnohogar.com.ar/4051/celular-motorola-moto-g222-$-gb-y-128gb-celeste.jpg"
    },
]

const renderizarEquipos = (equipos) => {
    containerHTML.innerHTML = ""
    equipos.forEach((equipo) => {
        containerHTML.innerHTML = containerHTML.innerHTML + `
            <div class="productCard">
                <div class="equipoInfo">
                    <h2>${equipo.marca} ${equipo.modelo}</h2>
                    <span><b>Precio</b>$${equipo.precio}</span>
                    <span><b>Stock disponible:</b>${equipo.stock}</span>
                    <button class="btn">Ver detalle</button>
                </div>
                <div class="equipoImg">
                    <img src=${equipo.img} alt=${equipo.marca}>
                </div>
            </div>
            `
    })
}
const eliminarEquipo = (id) => {
    const posicionEquipo = equipos.findIndex((equipo) => equipo.id === id)
    equipos.splice(posicionEquipo, 1)
    renderizarEquipos(equipos)
}

