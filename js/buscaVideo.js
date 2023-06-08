import { conexaoApi } from "./conectaApi.js"
import criarCard from "./mostrarVideos.js"
const buscaVideo = document.querySelector('[data-botao = "botao_pesquisa"]')
console.log(buscaVideo)
const dataButton= document.querySelector('[data-button = "botao"]')
buscaVideo.addEventListener('click', (e) =>{
    listarBusca(e)
})


  async function listarBusca(e) {
    // pra evitar comportamento indesejado
    e.preventDefault();
    const pesquisa = document.querySelector("#pesquisar").value
    console.log(pesquisa)
    const recebeBuscaVideo = await conexaoApi.buscarVideo(pesquisa)

    console.table(recebeBuscaVideo)
    const lista = document.querySelector('[data-lista="lista"]')
   // lista.innerHTML = "";
   while(lista.firstChild){
    console.log(lista.firstChild)
    console.log("apagando o primieiro filho")
    lista.removeChild(lista.firstChild)
   }
   console.log("o Numero de filhos na lista tem que ser null")
   console.log(lista.firstChild)
    recebeBuscaVideo.forEach(elements => {
      lista.appendChild(criarCard(elements.url,elements.titulo,elements.imagem,elements.descricao))
    })

    console.log(recebeBuscaVideo.length)
    if(recebeBuscaVideo.length === 0){
      // templete string es6 
      lista.innerHTML = `<h2 class="mensagem__titulo">Nao exite esse Termo</h2>`
    }


  }