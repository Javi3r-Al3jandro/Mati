//VARIABLES

// Es un espacio reservado en la memoria donde podemos guardar un dato
//           Hay 3 formas de hacerlo

//          palabras reservadas: var
//                               let
//                               const

//      VAR
//var: no se usa ES5
//var bateria = 50

//permite la redeclaración

//Inicialización implicita en undefined
//var edad

//si no se declara la variable por defector es var
//nombre = "pepe"

//se permite la reasignación
//bateria = 49

//var tiene hoisting: si se coloca el console.log antes de una variable lleva todos los var hacia arriba pero sin su valor


//       LET
//let nombre = "cosme fulanito"
//let no tiene hoisting
//tiene inicialización implicita en undefined
//permite la reasignación
//no permite la redeclaración


//       CONST
//const PI = 3.14
//no tiene hoisting
//no tiene inicialización implícita en undefined
//no permite la reasignación
//no permite la redeclaración


//FUNCIONES NATIVAS
//console.log
//console.log ("hola") //ejecuta un mensaje por consola

//alert
//alert("hola")// ejecuta una alerta bloqueante en pantalla que no se va hasta que no demos aceptar

//prompt
//prompt("ingrese su edad")//ejecuta una alerta con un dato a completar
//ejemplo let edad = number(prompt("ingrese su edad")) 
//el number es para que no guarde el dato como texto

//if y else (si y sino)

//let edad = Number(prompt("ingrese su edad"))
//if(edad >= 18){
//    console.log("puede pasar a la discoteca")
//}else{
//    console.log("no puede pasar a la discoteca")
//}


//TAREA1
//Verificar que el usuario haya escrito un nombre
//let nombre = prompt("ingrese su nombre")
//if(nombre){
//    console.log("Escribió un nombre")
//}else{
//    console.log("No escribió un nombre")
//}



//OPERADORES LOGICOS
//and, or, not

//and
//si la comida es rica y la espera es menor, me quedo

/* let esRicaLaComida = true
   let tiempoDeEspera = 30

   if(esRicaLaComida && tiempoDeEspera <= 30){
       console.log("me quedo a comer")
   }else{ 
       console.log("no me quedo a comer")
   } */


//or
//voy a comprar si tengo más de $1000 o si es primer día del mes

/* let dinero = 300
   let diaDelMes = 1

   if(dinero >=1000 || diaDelMes === 1){
       console.log("Voy a comprar")
   }else{
       console.log("No voy a comprar")
   } */



//not
//let estaPrendidaLaLuz = false
//estaPrendidaLaLuz = !estaPrendidaLaLuz //true
//estaPrendidaLaLuz = !estaPrendidaLaLuz //false



//EJERCITACION
//----------------------------------------------------------------------------------------------------------
//1)
/* Si la factura es tipo A el iva esta no incluido, si la factura es tipo B el iva esta incluido, 
si la factura es tipo C el iva esta exento*/

/* let tipoDeFactura = prompt("Ingrese el tipo de factura")
if (tipoDeFactura == "A"){
    console.log("La factura no tiene el IVA incluido")
}else if(tipoDeFactura == "B"){
    console.log("La factura tiene el IVA incluido")
}else if(tipoDeFactura == "C"){
    console.log("La factura no tiene IVA")
}else{
    console.log("ERROR Tipo de factura inválida")
}
 */

//----------------------------------------------------------------------------------------------------------

//2)
/* Crear una condicional que verifique que la edad sea mayor o igual a 18 en caso de ser así 
deci por consola "es mayor de edad" sino decir "es menor de edad" */

/* let edad = 65

if (edad >= 18){
    console.log("Es mayor de edad")
}else{ 
    console.log("Es menor de edad")
} */

/* if (edad>=18 && edad<=65){
    console.log("Esta en edad laborable")
}
 */

//----------------------------------------------------------------------------------------------------------

//3)
/* Crear un programa que solicite al usuario un precio. Eso guardarlo en una variable. Si el precio es 
inferior a 3000 entonces decir por consola "es barato", si es superior 
a 3000 decir por consola "es caro" */

/* let precio = prompt("Ingrese el precio en pesos")

if (precio < 3000){
    console.log("Es barato")
}else if (precio > 3000){ 
    console.log("Es caro")
}
 */

//----------------------------------------------------------------------------------------------------------

//4)
/* Solicitar al usuario 3 números y verificar cual es el mayor de los 3. Nos muestra el mayor por consola */

/* let n1 = prompt("Ingrese el primer nùmero")
let n2 = prompt("Ingrese el segundo nùmero")
let n3 = prompt("Ingrese el tercer nùmero")

if (n1>n2 && n1>n3){
    console.log("El mayor es "+n1)
}
else if(n2>n1 && n2>n3){
    console.log("El mayor es "+n2)
}
else if(n3>n1 && n3>n2){
    console.log("El mayor es "+n3)
}
else if(n1 == n2 && n1 == n3){
    console.log("Todos son iguales")
}
else if(n1==n2){
    console.log(n1+" y "+n2 +" son iguales")
}
else if(n2==n3){
    console.log(n2+" y "+n3 +" son iguales")
}
else if(n1==n3){
    console.log(n1+" y "+n3 +" son iguales")
} */

//----------------------------------------------------------------------------------------------------------

//5)
/*  Verificamos si el número es positivo, negativo o cero. Nos dirá por consola a que categoría pertenece.*/

/* let n = prompt("ingrese un número")

if(n>0){
    console.log("El número es positivo")
}
else if(n<0){
    console.log("El número es negativo")
}
else if(n==0){
    console.log("El número es cero")
}
else{
    console.log("ERROR: El número ingresado no es válido")
}
 */
//----------------------------------------------------------------------------------------------------------

//6)
/* verificamos si la edad esta en el rango de 18 a 65 años. Si se cumple la condición nos dirá por consola 
que está en edad laborable */

//REALIZADO EN EL EJERCICIO 2


























