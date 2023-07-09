//METODOS AVANZADOS DE ARRAY DE OBJETOS(PARTE 2)

/* const productos = [
    {
        id: 1 ,
        precio: 3 ,
        nombre: "producto 1"
    },
    {
        id: 2 ,
        precio: 4 ,
        nombre: "producto 2"
    },
    {
        id: 3 ,
        precio: 10 ,
        nombre: "producto 3"
    },
]; */

//Método FIND
//Me permite encontrar la posición de un elemento de un array de objetos

/* console.log(productos.find ( (producto) => producto.id == 2)) */

//Método anterior

/* const find = (id, array) => {
    for(const producto of array){
        if(producto.id == id){
            return producto
        }
    }
}
console.log(find(2, productos)) */


//Método CALLBACK
/* Pasa una función como un parámetro. Es una forma de escribir una función que nos permite visualizar mejor
los objetos y poder manejar un poco mejor las ejecuciones */



/* const saludar = (nombre, callback) => {
    callback(nombre)}

saludar("mati", (nombre) => {
    console.log(nombre)
}) */




//otro ejemplo con objeto

/* const saludar = (objeto, callback) => {
    callback(objeto)
}

saludar({
    id: 3 ,
    precio: 10 ,
    nombre: "producto 3"
}, (objeto) => {
    console.log(objeto.precio)
})
 */


// Mati escribe su version del find para mostrar
//como se veria escrita esa función en js
//nota: el if(callback(element)) entrega un booleano
//nota2: const find = (array, callback) => {.... es una función con nombre
//nota3:(producto => producto.id == 3) es una función anónima

/* console.log(productos.find ( (producto) => producto.id == 2)) */

/* const find = (array, callback) => {
    for(const element of array){
        if(callback(element)){
            return element
        }
    }
}
console.log(find(productos, (producto => producto.id == 3))) */




//Método FILTER

//Permite filtrar la información que queremos visualizar
//La diferencia con find es que FILTER siempre nos devuelve un array, mientras que find devuelve un objeto en particular



//Ejemplo con find
/* console.log(productos.find ((producto) => producto.id == 2)) */

//Ejemplo con filter
/* console.log(productos.filter((producto) => {
    return producto.precio > 7
}))
 */



/* const mensajesRedSocial = [
    "¡Hola a todos! ¿Cómo están?",
    "Hoy es un gran día, ¡estoy muy feliz!",
    "Me encanta esta red social, es genial interactuar con todos ustedes.",
    "¿Alguien tiene recomendaciones de películas?",
    "¡Felicidades a Juan por su nuevo trabajo!",
    "¡No puedo esperar para ir de vacaciones!",
    "¿Alguien quiere unirse a mi grupo de estudio?",
    "Estoy emocionado por el concierto de esta noche. ¿Quién más va?",
    "¡Qué foto tan increíble! Me encanta.",
    "Feliz cumpleaños a mi amigo Carlos. ¡Espero que tengas un día maravilloso!"
    ]; */

/* let stringABuscar = prompt("ingrese algo para buscar")
const result = mensajesRedSocial.filter ((mensaje) => mensaje.toUpperCase().includes(stringABuscar.toUpperCase())) */

//lo de arriba significa que filtraremos de nuestros mensajes, los msjs que incluyan en mayús, el string a buscar.

/* alert(result.join("\n")) */



//EJEMPLO 
//Tenemos un array de msjs y debemos obtener solo los msjs donde haya una infracciòn (la palabra tonto esta estrictamente prohibida)

/* const mensajesRedSocial = [
    "¡Hola a todos! ¿Cómo están?",
    "Hoy es un gran día, ¡estoy muy feliz!",
    "Me encanta esta red social, es genial interactuar con todos ustedes.",
    "¿Alguien tiene recomendaciones de películas?",
    "¡Felicidades a tonto Juan por su nuevo trabajo!",
    "¡No TONTO puedo esperar para ir de vacaciones!",
    "¿Alguien Tonto quiere unirse a mi grupo de estudio?",
    "Estoy emocionado por el concierto de esta noche. ¿Quién más va?",
    "¡Qué foto tan increíble! Me encanta.",
    "Feliz cumpleaños a mi tonto amigo Carlos. ¡Espero que tengas un día maravilloso!"
    ];

    let palabra = "tonto"
    const result = mensajesRedSocial.filter ((mensaje) => mensaje.toUpperCase().includes(palabra.toUpperCase())) 
    alert(result.join("\n")) */


/* 
    const productos = [
        {
            id: 1 ,
            precio: 3 ,
            nombre: "producto 1"
        },
        {
            id: 2 ,
            precio: 4 ,
            nombre: "producto 2"
        },
        {
            id: 3 ,
            precio: 10 ,
            nombre: "producto 3"
        },
    ];

    console.log(
        productos.map(
            (producto) => {
                producto.precio = "$" + producto.precio
                return producto
            }
        )
    )
 */

//Sacar una copia a un objeto

/* const obj = [
    {
        id: 1 ,
        precio: 3 ,
        nombre: "producto 1"
    }
] */

/* a- console.log({...obj}) */

/*b- console.log({...obj, stock:20}) */

//forma breve de escribir con la copia

/* console.log(productos.map((producto => ({...producto, precio: "$" + producto.precio})))) */
// los ...{ se pone entre paréntesis para que primero resuelva eso sino toma como si fuese un return




const gifts = ['cat', 'game', 'socks']

const wrapping = (gifts) => {
    return gifts.map((gift) => {
        return (
            "*".repeat(gift.length + 2) + "\n*" + gift + "*\n" + "*".repeat(gift.length + 2) 
            )
    })
}

//está bien resuelto

/* console.log(wrapping(gifts)) */

//con esta forma se ve mejor

const wrapped = wrapping(gifts)
wrapped.forEach(wrappedGift => console.log(wrappedGift))


