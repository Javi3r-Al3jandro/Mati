//POSTEOS DE TWITTER. 

const posts = [
    {
        nombre: "Lucas",
        nickname: "@lucasOk",
        timestamp: "10 minutes ago",
        likes: 65,
        retweets: 5,
        comments: 3,
        userImage: "https://lh3.googleusercontent.com/eDru_j-XN5UGxN8E0DmWjYnobu5UbK-SrcWOwIlV2iIPiFBgpjk7qu8bLl7HtBU-guErN-cWu-aHd0dGwtK_NOkU18ixB0a1tPyTy092empyXTGTOiHT=w500-rp-e30",
        content: "Me gusta mirar game of thrones"
    },
    {
        nombre: "Pepe",
        nickname: "@PepegrilloOk",
        timestamp: "5 minutes ago",
        likes: 32,
        retweets: 1,
        comments: 15,
        userImage: "https://lh3.googleusercontent.com/eDru_j-XN5UGxN8E0DmWjYnobu5UbK-SrcWOwIlV2iIPiFBgpjk7qu8bLl7HtBU-guErN-cWu-aHd0dGwtK_NOkU18ixB0a1tPyTy092empyXTGTOiHT=w500-rp-e30",
        content: "No creo que la scaloneta se pare ahora"
    },
    {
        nombre: "Homero",
        nickname: "@HomerOk",
        timestamp: "2 minutes ago",
        likes: 30,
        retweets: 4,
        comments: 10,
        userImage: "https://lh3.googleusercontent.com/eDru_j-XN5UGxN8E0DmWjYnobu5UbK-SrcWOwIlV2iIPiFBgpjk7qu8bLl7HtBU-guErN-cWu-aHd0dGwtK_NOkU18ixB0a1tPyTy092empyXTGTOiHT=w500-rp-e30",
        content: "Los dias de lluvia se debe comer tortafrita"
    },
]

const postContainerHTML = document.querySelector(".posts")

const renderizarPosts = (posts) => {
    postContainerHTML.innerHTML = ""
    posts.forEach(post => {
        postContainerHTML.innerHTML += `
        <div>
            <img src="${post.userImage}" width="50px">
            <div>
                <span>${post.nombre}</span>
                <span>${post.nickname}</span>
            </div>
            <span>${post.timestamp}</span>
            <p>${post.content}</p>
            <div>
                <span>${post.likes} likes</span>
                <span>${post.retweets} retweets</span>
                <span>${post.comments} comments</span>
            </div>
            <hr>
        </div>
        `
    })
}

renderizarPosts(posts)


//EVENTOS EN JS
/* Un evento es la acción que se ejecuta cuando realizamos otra: Por ejemplo si paso clickeo minimizar
el evento es que se minimiza la pantalla*/
/* Al darse un evento se ejecuta una funcion */
/* Hay tres formas de conectarlos:  1- directamente en el HTML (pero esta mal hacerlo por mezclar html y js, por codigo html largo 
    y por que muestra funciones al usuario que no queremos que vea) 
                                    2- desde js llamando el button click por clase y ejecutando una acción (tampoco es muy utilizada pero es mejor que la anterior
                                    3- utilizando .addEventListener (la mejor y buena practica*/

const saludar = () => {
    console.log("hola")
}

//2-OBTENER EL ELEMENTO CLICK POR ID.

/* const btnClick = document.getElementById("btn")
btnClick.onclick = saludar */

//3- utilizando addEventListener

/* const btnClick = document.getElementById("btn")
btnClick.addEventListener( "click" , saludar) */

//EJEMPLOS DE EVENTOS DE addEventListener

//a- focus

/* btnClick.addEventListener( "focus" , () => {
    console.log("se presiono el boton del mouse")
})  */


//b- click

/* btnClick.addEventListener( "click" , () => {
    console.log("se presiono y se soltó el boton del mouse")
})  */


//c- change
/* const search = document.getElementById("search")
search.addEventListener("change" , () => {
    console.log ("se escribio algo en el input")
}) */

//d- input
/* const search = document.getElementById("search")
search.addEventListener("input" , () => {
    console.log ("se escribio algo en el input")
}) */

/* const search = document.getElementById("search")
search.addEventListener("input" , () => {
    console.log ("el valor del input es " + search.value)
}) */

//e- filtrado por comentarios de tweet en buscador

const search = document.getElementById("search")
search.addEventListener("input" , () => {
    let valorDelInput = search.value.toLowerCase()
    console.log (valorDelInput)

    //este muestra por consola los arrays buscados por comentario
    console.log(posts.filter(post => post.content.toLowerCase().includes(valorDelInput)))
    
    //esto muestra en el la pagina el tweet buscado por comentario
    renderizarPosts(posts.filter(post => post.content.toLowerCase().includes(valorDelInput)))
})




//EJERCICIOS DE EVENTOS CON JS
//Las consignas estan en el html

//1-
const contador = document.getElementById("contador")
const suma = document.getElementById("btn-mas")
const resta = document.getElementById("btn-menos")

let num = 0;

suma.addEventListener("click" , () => {
    num = num + 1
    contador.innerHTML = num
})

resta.addEventListener("click" , () => {
    num = num - 1
    contador.innerHTML = num
})

//2-
const contador2 = document.getElementById("contador2")
const suma2 = document.getElementById("btn-mas2")
const resta2 = document.getElementById("btn-menos2")

let num2 = 1;

suma2.addEventListener("click" , () => {
    if(num2<10){
    num2 = num2 + 1
    contador2.innerHTML = num2
    } else {
        num2
    }
})

resta2.addEventListener("click" , () => {
    if(num2>1){
    num2 = num2 - 1
    contador2.innerHTML = num2
    }else{
        num2
    }
})


//3-
const contador3 = document.getElementById("contador3")
const suma3 = document.getElementById("btn-mas3")
const resta3 = document.getElementById("btn-menos3")
const confirmar = document.getElementById("confirmar")
const numeroConfirmado = document.getElementById("confirmacion")


let num3 = 1;

suma3.addEventListener("click" , () => {
    if(num3<10){
    num3 = num3 + 1
    contador3.innerHTML = num3
    } else {
        num3
    }
})

resta3.addEventListener("click" , () => {
    if(num3>1){
    num3 = num3 - 1
    contador3.innerHTML = num3
    }else{
        num3
    }
})

confirmar.addEventListener("click", () => {
    numeroConfirmado.innerHTML = `
    <div>
    <span>El número confirmado es: ${num3}</span>
    </div>
    `
})


//4- En teoria asi funciona pero no se porque no lo hace

const Menu = document.getElementById("Menu")

const navbarHTML = document.getElementById("navbar")

    Menu.addEventListener("click", () => {
        navbarHTML.classList.toggle("oculto")
})











