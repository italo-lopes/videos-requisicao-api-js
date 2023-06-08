import { conexaoApi } from "./conectaApi.js";

const form = document.querySelector('[data-from="from"]')
const submit = document.querySelector('[data-enviar]')
console.log(form)
console.log(submit)
const horas = new Date();
console.log(horas.toLocaleDateString());

// como pegar esses form em cada um 
// form tem o evento submit e nao o botao
form.addEventListener("submit", (event) => {
    event.preventDefault();
    novoVideo()
})
async function novoVideo(){
  
    const url = document.querySelector('[data-url]').value
    const titulo = document.querySelector("[data-titulo]").value
    const imagem = document.querySelector("[data-imagem]").value
    const descricao = Math.floor(Math.random()*10).toString()
    try{
    await conexaoApi.addVideo(url,titulo,imagem,descricao)

    window.location.href = "/pages/envio-concluido.html";
    }catch(e){
        console.log(e)
        alert(e)
        // erro vindo do post de conexao do throw forçando 
        //o erro e passando a mensagem como parametro 
    }
    

}
    /*
    (como pegar esses form em cada um) 
    const postData = {
        url : url,
        titulo : titulo,
        imagem : imagem,
        descriçao : descriçao
    }
    */
// const url = "https://www.youtube.com/embed/rdxta8hlisE"
// const titulo = "Engana Dizendo Que Ama"
// const imagem = "https://yt3.ggpht.com/h6EtffJBoJLtQPW5F6RqX__Jr9nR…nV__RL7ZgJUm1px-MiDpvsw=s48-c-k-c0x00ffffff-no-rj"
// const descricao = "sadasd";