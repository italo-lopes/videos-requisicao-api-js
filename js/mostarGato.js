async function geraGato(){
    const conexao = await fetch("https://api.thecatapi.com/v1/images/search")
    const conexaoConverdida  = await conexao.json()
    return conexaoConverdida
  }

const gatoRandom =  document.querySelector('[data-id="gato"]')
const recebeGato = geraGato();
console.log(recebeGato.then((item) => {
    gatoRandom.innerHTML = ""
    item.forEach(element => {
        gatoRandom.innerHTML = `<p class= 'mensagem__titulo'> Um gato RANDOM com id: ${element.id}  e url : ${element.url}</p><br>`
        const imagem = document.createElement('img')
        imagem.src = element.url
        imagem.style.width = element.width/2
        imagem.style.height = element.height/2
        imagem.id = element.id
        gatoRandom.appendChild(imagem)
    });
    console.table(item)
}))



