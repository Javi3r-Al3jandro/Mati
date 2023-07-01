// como hacer que aparezcan 5 "hola mundo por consola"

/* ley de programadores: DRY--->"DON´T REPEAT YOURSELF"=No se repitan */

/* console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo") */   // A ESTO SE REFIERE DE NO REPETIR

//---------------------------------------------------------------------------------------------------------------

//BUCLE FOR 

//Tiene un contador incorporado

/* for(let iterador = 10; iterador <= 150; iterador = iterador +2){
    console.log(iterador + "°pasada")
    console.log("hola mundo")
} */

//for-----------------------> bucle contador
// iterador-----------------> contador
//let iterador = 1 ---------> guarda iterador en una variable y le dice que arranque en 1
//iterador <= 5-------------> condición que debe cumplir el iterador para realizar tal función
//iterador = iterador + 1 --> cuando cumple la función, suma 1 a la variable iterador
/* el programa ingresa al bucle, lee la variable y le da valor, lee la condición, imprime en la consola,
suma 1 a la variable iterador y repite el proceso hasta que iterador es = a 6 y la condición se hace 
falsa. Ahí deja de funcionar este bucle */


//EJERCICIOS DE BUCLE FOR

//1) imprime los números del 1 al 10

/* for(let i = 1; i <= 10; i = i + 1){
    console.log(i + "°pasada")
    console.log(i)
} */

//2) imprime los números pares del 2 al 20

/* for(let i = 2; i <= 20; i = i + 2){
    console.log(i + "°pasada")
    console.log(i)
} */

//3) imprime los números impares del 1 al 19

/* for(let i = 1; i <= 19; i = i + 2){
    console.log(i + "°pasada")
    console.log(i)
} */

//4) imprime los números del 10 al 1 en orden inverso

/* for(let i = 10; i >= 1; i = i -1){
    console.log(i + "°pasada")
    console.log(i)
} */

//EJEMPLO CON IF Y ELSE

/* for(let i = 1; i <= 20; i = i + 1){
    console.log(i + "°pasada")
    if(i % 2 == 0){
        console.log(i + " Es par")
    }else{
        console.log(i + " Es impar")
    }
} */

//EJEMPLO CON PROMPT y BREAK

/* for(let i = 1; i <= 10; i = i + 1){
    let nombre = prompt("ingrese nombre")
    if(nombre === "pepito"){
        break
    }
} */

// EJEMPLO CON CONTINUE

/* Hacer un contador del 1 al 10 salteando el 5 y el 6 */

/* for(let i = 1; i <= 10; i = i + 1){
    if(i === 5 || i === 6){
        continue
    }
    console.log(i + "°pasada")
    console.log(i)
}  */

//EJERCICIOS 

/* 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5 */

/* for(let i = 1; i <= 10; i = i + 1){
    console.log(i + "°pasada")
    console.log(i)
    if(i === 5){
        break
    }
} */

/* 6)Imprime los números del 1 al 10, pero salta el 5 */

/* for(let i = 1; i <= 10; i = i + 1){
    if(i === 5){
        continue
    }
    console.log(i + "°pasada")
    console.log(i)
} */

//---------------------------------------------------------------------------------------------------------------

//BUCLE WHILE

/* let decision = prompt("ingrese SI para continuar el programa")
while(decision === "SI"){
    alert("El programa se está ejecutando")
    decision = prompt("ingrese SI para continuar el programa")
} */

//EJERCICIO

/* Crear una calculadora:
Solicitaremos al usuario una decisión "si desea usar la calculadora presione SI" 
Si presiono SI, se solicitara una operación y dos números, y se resolverá según la
operación (+ o -).
Si la operación no existe entonces se dira "ERROR: operación no válida.
Al finalizar el programa de la calculadora volverá a solicitar una decisión que dirá
"Escriba SI si desea usar la calculadora*/ 

/* Se dira 'La calculadora ha finalizado' en caso de haberse acabado el bucle while
OPCIONAL: Agregar las operaciones * y /
OPCIONAL: La operacion ademas de ser + debera funcionar con su formato texto "sumar", lo mismo con el resto de operaciones
MERITORIO: Se validara que los numeros ingresados, sean numeros, y se hará previo al if de las operaciones */


/* let dc = prompt("Si desea usar la calculadora presione SI")
if(dc === "SI"){
    while(dc === "SI"){
        if(dc === "SI"){
            let op = prompt("ingrese la operación")
            let n1 = Number(prompt("ingrese un número"))
            let n2 = Number(prompt("ingrese un número"))
            if(op === "+"){
                alert("El resultado de " + n1 + " + " + n2 + " es: " + (n1 + n2))
                }
                else if (op === "-"){
                    alert("El resultado de " + n1 + " - " + n2 + " es: " + (n1 - n2))
                    }
                else if (op === "*"){
                    alert("El resultado de " + n1 + " - " + n2 + " es: " + (n1 * n2))
                    }
                else if (op === "/"){
                    alert("El resultado de " + n1 + " - " + n2 + " es: " + (n1 / n2))
                    }
                else if(op != "+" || op != "-" || op != "*" || op != "/"){
                    alert("ERROR: Operación no válida")
                    }
            dc = prompt("Si desea usar la calculadora presione SI")
            if(dc != "SI"){
                alert("La calculadora ha finalizado")
            }
        }
    }
}else if(dc != "SI") {
    alert("La calculadora ha finalizado")
}
 */

//-------------------------------------------------------------------------------------------------------

//METODOS DE STRING

//MEDIR LARGO FRASES/TEXTO
/* let nombre = "pepe"
console.log("la cantidad de caracteres del string " + nombre + " es: " + nombre.length)*/


//SABER SI EXISTEN FRASES/TEXTOS INDESEADOS
/* let msj = prompt("ingrese un mensaje")
if(msj.includes("tontito")){
    console.log("mensaje ofensivo detectado")
}else{
    console.log("Mensaje enviado con éxito")
} */


//REEMPLAZAR CARACTERES POR OTROS
/* let msj = "yo%20soy%20programador%20de%20la%20utn"
let msj2 = msj.replace("%20" , " ")
console.log("el msj nuevo es: " + msj2) */


//REPETIR CARACTERES X VECES
/* let rating = 5
console.log("El bar pepesito tiene " + "⭐".repeat(rating)) */


//MOSTRAR EL PRIMER CARACTER DE UNA FRASE
/* let msj = "hola mundo"
console.log(msj[0]) */


//CAMBIAR UNA SOLA LETRA DE UNA FRASE A MAYUSCULA
let msj = "hola mundo"
console.log(msj[0])
let resultado = msj[0].toUpperCase()
for(let i = 1; i < msj.length; i = i + 1){
    resultado = resultado + msj[i]
}
console.log(resultado)
//con i < msj.length decimos que el iterador abarca el largo del texto/mensaje
