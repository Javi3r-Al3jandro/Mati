//ARAYS

//Es un dato que nos permite guardar una lista de elementos ordenados

/* const listaDeAlumnos = ["pepe", "juan", "lucas", "ezequiel"] */

//cada string tiene su indice. Lo podemos ver en la consola

/* console.log(listaDeAlumnos[1]) */

/* console.log(listaDeAlumnos.length)*/

//Agrega un item mas a la lista pero en el final
/* listaDeAlumnos[4] = "lucas" */                         

//Agrega un item mas a la lista pero en el final
/* listaDeAlumnos[listaDeAlumnos.length] = "lucas"  */    

//Agrega un item mas a la lista pero en el final
/* listaDeAlumnos.push("yanina")                             
console.log(listaDeAlumnos) */

//cumple el mismo efecto anterior pero en un paso menos para mostrarlo
/* console.log(listaDeAlumnos.push("yanina"))*/

//Agrega un item mas a la lista pero en el principio
/* listaDeAlumnos.unshift("yanina") */

//cumple el mismo efecto anterior pero en un paso menos para mostrarlo
/* console.log(listaDeAlumnos.unshift("yanina"))  */

//Remueve el último elemento del array y lo muestra
/* console.log(listaDeAlumnos.pop())*/

//Remueve el primer elemento del array y lo muestra
/* console.log(listaDeAlumnos.shift())*/

//Remueve los elementos que le indiquemos dentro del paréntesis
//El 1 indica desde donde comienza a borrar y el 2 la cantida a borrar a partir de 1 (inclusive)
/* listaDeAlumnos.splice(1 , 2) */
//Con el mismo método en el 3er parámetro del paréntesis puedo agregar también elementos en el medio del array
/* listaDeAlumnos.splice(1 , 2 , "chilo" , "pichilo") */

//Averigua la posición de un elemento dentro de un array. Solo muestra el primero en caso de repetición de "lucas"
/* console.log(listaDeAlumnos.indexOf("lucas"))*/

//Averigua la posición de un elemento dentro de un array. Solo muestra el último en caso de repetición de "lucas"
/* console.log(listaDeAlumnos.lastIndexOf("lucas"))*/



//EJERCICIO 1
//Eliminar a lucas y reemplazar por ulises
/* let posicionDeLucas = listaDeAlumnos.indexOf("lucas")
listaDeAlumnos.splice(posicionDeLucas , 1 , "ulises") */

//EJERCICIO 2

/* const listaDeJugadores = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga'] */

//Se debera eliminar a Neymar y se agregara al principio del array
//Se debera reemplazar a Di Maria por Ronaldo
//Se agregara despues de Modric a 'Serre7' 

//a- 
/* console.log(listaDeJugadores)
listaDeJugadores.splice(5 , 1)
console.log(listaDeJugadores)
listaDeJugadores.unshift("Neymar")
console.log(listaDeJugadores) */

//b-
/* let posicionDeDiMaria = listaDeJugadores.indexOf("Di Maria")
listaDeJugadores.splice(posicionDeDiMaria , 1 , "Ronaldo")
console.log(listaDeJugadores) */

//c-
/* let posicionModric = listaDeJugadores.indexOf("Modric")
listaDeJugadores.splice(posicionModric , 1 , "Modric" , "Serre7")
console.log(listaDeJugadores) */

//------------------------------------------------------------------------------------------------------------------------------


/* const listaDeJugadores = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga'] */

//Nos muestra los nombres de array en columna por separado
/* for(let i = 0 ; i < listaDeJugadores.length ; i = i + 1){
    console.log(listaDeJugadores[i])
} */

//EJERCICIO
//Mostrar por consola todos los nombres que empiecen con la letra "O"

// Esto nos muestra la primer letra de cada i (por metodo de string)
/* for(let i = 0 ; i < listaDeJugadores.length ; i = i + 1){
    console.log(listaDeJugadores[i][0])
} */

//Ejercicio resuelto
/* for(let i = 0 ; i < listaDeJugadores.length ; i = i + 1){
    if(listaDeJugadores[i][0] === "O"){
        console.log(listaDeJugadores[i])
    }
} */


//EJERCICIO
//Encontrar la palabra "bobo" y mostrarlo en consola
//Enviar esos msjs a un array que sea para mensajes ofensivos

/* const msj = [ "buen día" , "todo bien" , "no estoy a gusto, bobo" , "anda pa allá bobo"]
const msjOf = []
for(let i = 0 ; i < msj.length ; i = i + 1){
    if(msj[i].includes("bobo")){
        console.log("El mensaje " + msj[i] + " contiene la palabra ofensiva, BOBO")
        msjOf.push(msj[i])
    }
}
console.log(msjOf) */


//------------------------------------------------------------------------------------------------------------------------------


// FOR OF

//Se utiliza para leer mejor el código. Acorta la escritura. Funciona igual que el 
//paso anterior

/* const msj = [ "buen día" , "todo bien" , "no estoy a gusto, bobo" , "anda pa allá bobo"]
const msjOf = []

for(let mensaje of msj){ //se lee "por cada mensaje de msj"
    if(mensaje.includes("bobo")){
        console.log("El mensaje " + mensaje + " contiene la palabra ofensiva, BOBO")
    msjOf.push(mensaje)
    }
} */


//------------------------------------------------------------------------------------------------------------------------------

//SCOPES O AMBITOS

/* Son espacios en los cuales pordemos redeclarar valor a una misma variable sin
que se altere la variable principal. Este cambio sólo es funcional dentro del ámbito */
//Muestra entonces que SI se puede redeclarar una variable PERO siempre y cuando sea en ambitos diferentes
//Solo se utiliza con la variable "let" y "const" osea que "var" no tiene ámbito
//if(true){} se escribe para generar un ámbito



/* let nombre = "juan"

if(true){
    let nombre = "pepe"
    console.log(nombre)
} */ //en este caso el console log esta dentro del ámbito por eso imprime pepe



/* let nombre = "juan"

if(true){
    let nombre = "pepe"
    console.log(nombre)
}
console.log(nombre) */ //de este modo imprime primero pepe y luego juan



/* let nombre = "juan"       ------>Asigno variable global

if(true){
    let nombre = "pepe"      ------>Asigno variable local en ambito 1
    console.log(nombre)      ------>Imprimo variable pepe
    if(true){
        nombre = "yanina"    ------>Cambio variable local de ambito 1 en ambito 2
        console.log(nombre)  ------>Imprimo variable de ambito 2
    }
    console.log(nombre)      ------>Imprimo variable de ambito 1 pero modificada 
}
console.log(nombre)          ------->Imprimo variable global*/


//------------------------------------------------------------------------------------------------------------------------------

//FUNCIONES

/* console.log("hola pepe") */
// "=>" es una flecha. en este caso indica que dentro del parentesis va lo de dentro de las llaves
// Al final se llama a la constante para cumplir la función

//Declaración de una función
/* const saludar = (x) => {             
    console.log("hola " + x)
} */
//Invocación, llamada o ejecución de una función
/* saludar("Ale") */


//Saluda a Ale Lopez
/* const saludar = (nombre , apellido) => {             
    console.log("hola " + nombre + " " + apellido)
}
saludar("Ale", "Lopez") */


//Saluda a Ale Ale
/* const saludar = ( nombre = "Ale" , apellido = "Ale") => {             
    console.log("hola " + nombre + " " + apellido)
}
saludar() */

//Retorno común
/* const crearSaludo = ( nombre , apellido ) => {             
    return "hola " + nombre + " " + apellido
}
console.log(crearSaludo("Javi" , "Lopez"))
alert(crearSaludo("chilo" , "picho")) */


//Retorno implicito
//El que funciona como return es la flecha
/* const crearSaludo = ( nombre , apellido ) => "hola " + nombre + " " + apellido
console.log(crearSaludo("Javi" , "Lopez"))
alert(crearSaludo("chilo" , "picho")) */

//Pasar horas a segundos
/* const transformarHrsEnSeg = (horas) => horas *60 *60

console.log("Camine por 3 horas " + "(" + transformarHrsEnSeg(3) + " min aprox)") */

//Pasar la primer letra de un string a mayúscula
/* const cambiaMayus = (string) => {
    let result = string[0].toUpperCase()
    for(let i = 1; i < string.length; i = i+1){
        result = result + string[i]
    }
    return result
}
 */

//EJERCICIO 
/* Generar la funcion es mayor de edad  */

/* const esMayorDeEdad = (edad) => {
    return edad >=18
}
 */
/* Generar una funcion llamada esVocal(letra) nos devolvera true o false dependiendo de si es vocal */

const esVocal = (letra) => {
    return letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra ==="u"
}



