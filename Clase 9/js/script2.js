const recomendedUsers = [
    {
        nombre: "Lucas",
        userName: "@LucasOk",
        image: "https://lh3.googleusercontent.com/LxD7qhuSHIr45NYir7jj_68wEkkrCtaYzCrSHGgPT9mm0pWmXHoB0iLq42CsV4U9jPT7FdwSPPTPOvs1W8yV0Jzp0HccqF6gegtAvX2U-3iA_krgtPfB=w500-rp-e30"
    },
    {
        nombre: "Maria",
        userName: "@MariaOk",
        image: "https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30"
    },
    {
        nombre: "Pepe",
        userName: "@PepegrilloOk",
        image: "https://lh3.googleusercontent.com/v6rNJ9lk1JgiNayMmPfg8ee2pDBm8_BP7xxjP2v0wm-NAZ2dR-XZ-0sLAxKFGnDsyRu6M3UxEu871dRsfhcAJYGnvbTDHjGXqpLgoM1k51RK8pYp3vM=w500-rp-e30"
    }
]

const recomendedListHTML = document.querySelector(".recomendedPeopleList")

recomendedUsers.forEach((user) => {
    recomendedListHTML.innerHTML += `
                <div class="recomendedPeopleCard">
                    <div class="userRecomendedImage">
                        <img src="${user.image}" alt="user image">
                    </div>
                    <div class="userRecomendedInfo">
                        <h3>${user.nombre}</h3>
                        <span>${user.userName}</span>
                    </div>
                    <button class="btn-follow"> Show more </button>
                </div>
    `
})

