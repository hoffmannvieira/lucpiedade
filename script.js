let artes = []
const containerArte = document.querySelector('.artes__lista')
const arroz = 'https://hoffmannvieira.github.io/artesJSON/artes.json'


async function conexao() {
    const conecta = await fetch(arroz);
    artes = await conecta.json()
    console.log(artes)
    exibirImagens(artes)
}

conexao()

function exibirImagens(listaDeArtes) {
    listaDeArtes.forEach(arte => {
        containerArte.innerHTML += `<li class="artes__lista-item">
        <div class="artes__lista-content">
            <img src="${arte.imagem}" alt="${arte.titulo}" class="artes__lista-content-img">
            <div class="artes__lista-overlay">
                <h1 class="artes__lista-texto">${arte.titulo}</h1>
            </div>
        </div>
    </li>`
    })
}




