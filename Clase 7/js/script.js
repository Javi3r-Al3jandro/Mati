/* const alumnos = ["pepe", "juan", "lucas"] ESTO ES UN ARRAY COMÚN*/

//OBJETO LITERAL

/* Espacio donde podemos guardar datos que tengan una relación entre si, para no utilizar
muchos lugares de variables. Por ejemplo*/

/* let nombreUsuario = "lucas"
let apellidoUsuario = "suarez"
let edadUsuario = 30 */
// Se puede guardar de la forma siguiente

//modelo key-value. Donde nombre, apellido y edad son las llaves(key)
/* const usuario = {        
    nombre: "lucas",     
    apellido: "suarez",
    edad: 30
}
console.log(usuario.nombre)
 */


//Se puede colocar un objeto dentro de un array
/* const alumnos = ["pepe", "juan", "lucas", 
    {
        nombre: "lucas",
        apellido: "suarez"
    } 
]
alumnos.length */

//------------------------------------------------------------------------------------------------------------------------

//ARRAY DE OBJETOS

/* const alumnos = [
    {
        nombre: "maria",
        apellido: "suarez"
    },
    {
        nombre: "ivana",
        apellido:"suarez"
    },
    {
        nombre: "lucas",
        apellido: "suarez"
    }
]
 */
//------------------------------------------------------------------------------------------------------------------------

//TEMPLATE STRINGS

/* console.log(
    "el usuario " + usuario.nombre + " " + usuario.apellido
) */
//Es una nueva forma de escribir strings para html de cara a futuro
//Es una forma de mejorar la escritura anterior
//Se utiliza comillas invertidas ALT+96

/* console.log(
    `hola`
) */

//puedo realizar saltos de línea grandes y se verá reflejado en la consola al imprimir 

/* console.log(
    `
    
    hola
    
    
    `
) */

//Puedo interpolar (pasar de formato string a js )

/* console.log(
    `hola ${usuario.nombre} ${usuario.apellido}`
) */

/* const usuario = {        
    nombre: "lucas",     
    apellido: "suarez",
    edad: 30
}

console.log(
    `
    -Entrevistador: hola ${usuario.nombre} ${usuario.apellido}, cuántos años tenes?
    -${usuario.nombre}: Hola, tengo ${usuario.edad}
    
    `
    ) */

//------------------------------------------------------------------------------------------------------------------------

    //EJERCICIO
    /* Recorrer el array y por cada elemento decir: USAR TEMPLATE STRINGS */
    /* Hola me llamo nombre apellido */

/*     const alumnos = [
        {
            nombre:'maria',
            apellido: 'juana'
        }, 
        {
            nombre: 'lucas',
            apellido: 'Suarez'
        },
        {
            nombre: 'Ivana',
            apellido: 'suarez'
        }
    ]

for (let alumno of alumnos) {

    console.log(
    `
    Hola ${alumno.nombre}  ${alumno.apellido}

    `
    )
} */


//------------------------------------------------------------------------------------------------------------------------


//METODOS AVANZADOS DE ARRAY

//Son métodos que nos permitirán manipular mejor los arrayas de objetos

/* const alumnos = [
    {
        nombre:'maria',
        apellido: 'juana'
    }, 
    {
        nombre: 'lucas',
        apellido: 'Suarez'
    },
    {
        nombre: 'Ivana',
        apellido: 'suarez'
    }
] */

//FOREACH

//Sirve para recorrer un array. Una mejor forma de escribir for of


/* alumnos.forEach((alumno) => {
    console.log(`Hola me llamo ${alumno.nombre} ${alumno.apellido}`)
}) */

/* alumnos.forEach((alumno, index, array) => {
    console.log(`${index + 1}) Hola me llamo ${alumno.nombre} ${alumno.apellido}`)
    console.log(array)
}) */



//MAP

//Sirve para crear un array en base a otro array
//Nos devuelve un array donde cada elemento es el return de la función

/* const nombresCompletos = alumnos.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`
})

console.log(nombresCompletos) */

//EJERCICIO 1

/* const numeros = [2, 8, 9, 5] */

//Crear un función llamada porDos(array) y devuelve un array de números multiplicada por 2

/* const porDos = (array) => {
    return array.map((num) => {
        return num*2
    })
}   */   

/* Razonamiento: 

const porDOs = -------------------> lo que sigue se guardará en porDos 
(array)---------------------------> es la x en el lugar de f(x)
=> { return numeros.map((num)-----> me pide que retorne el nuevo array al que cada elemento se llamará num. Ese array es [2, 8, 9, 5]
=> { return num*2 ----------------> me pide que a cada num del array nuevo lo multiplique por dos*/

/* console.log(numeros)
console.log(porDos(numeros)) */

//ahora con el index o indice . Para que figure el número de item

/* const porDos = (array) => {
    return array.map((num, indice) => {
        return indice + 1 + ')' + (num*2)
    })
}     
console.log(numeros)
console.log(porDos(numeros)) */


// EJERCICIO 2
// Mejorar la función porDos para que ahora sea la fución: por (numero, arrayDeNumeros) 
// o sea por(3, [2, 4, 6]) => [6, 12, 18]

/* const arrayDeNumeros= [2, 3, 4]


const por = (numero, arrayDeNumeros) => {
    return arrayDeNumeros.map((arraymap) => {
        return numero * arraymap
    })
}

console.log(arrayDeNumeros)
console.log(por(3, arrayDeNumeros)) */


//EJERCICIOS

//1)
/* Dado un array de números, escribir una función que calcule la suma de todos los números del array.*/

/* const sumatoria = (arrayDeNumeros) => { 
    let total = 0
    arrayDeNumeros.forEach((numero) => {
        total = total + numero
    })
    return total
}
console.log(sumatoria([0, 1, 2, 3, 4, 5])) */


/* 4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares. */

/* const sumatoria = (arrayDeNumeros) => {
    let total = 0
    arrayDeNumeros.forEach((numero) => {
        if(numero % 2 === 0) { 
            total = total + numero
        } 
    })
    return total
}

console.log(sumatoria([1, 2, 2]))
 */




/* 26)
Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras
 y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. */

//filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
//['remolacha', 'sorpresa', 'verde']

let num = Number

const filtrarPorLongitud = (num, arrayPalabras) => {
    return arrayPalabras.map((arrayPalabrasMap) => { 
        if(arrayPalabrasMap.length > num){
            return arrayPalabrasMap
        }
    })
}
const arrayPalabras = ["hola", "sol", "dia", "matecocido"]
conasole.log(filtrarPorLongitud(1, arrayPalabras))





/* 32)
definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase. */

/* const longitudes = (listaDeFrases) => {
    return listaDeFrases.map((frase) => {
        return frase.length
    })
}

console.log(longitudes(["hola", "chausito", "dia"])) */


















