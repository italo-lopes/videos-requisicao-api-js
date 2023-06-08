import { conexaoApi } from "./conectaApi.js";


var url = "http://localhost:3000/videos"; // Substitua pelo seu endpoint JSON-Server
var postData = { 
    url : "https://www.youtube.com/embed/bWqwllAZkQE",
     titulo  : "TDF #1 - Jotapê, Magrão & Prado - Ruas de São Paulo",
     imagem : "https://yt3.ggpht.com/DHKdIBmTLbWMlkupcfE6_Pja2lLRzLkZUX6dtu72-dvfiuhlAoeCcVZ1ETTNS-x1B6NHMiFtDPo=s48-c-k-c0x00ffffff-no-nd-rj",
     descricao : "1.145.848 visualizações"
};

const dataButton= document.querySelector('[data-button = "botao"]')


dataButton.addEventListener('click',post)
function post(){
    console.log("italo")
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then(function(response) {
    if (response.ok) {
      console.table(postData);
      // Faça algo com a resposta do servidor, se necessário
    } else {
      throw new Error("Erro na requisição POST");
    }
  })
  .catch(function(error) {
    console.log(error);
  });
}


console.log("Hello World!");

const lista = document.querySelector('[data-lista= "lista"]');
console.log(lista);

// export default function nomeDaFunction(){}

export default function criarCard(url, titulo, imagem, descricao) {
  const videoItem = document.createElement("li");
  videoItem.classList.add("videos__item");
  // videoItem.className = 'videos__item'
  // template Spring ES6
  videoItem.innerHTML = `<iframe width="100%" height="72%" src="${url}"
title="${titulo}"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>
<div class="descricao-video">
<img src="${imagem}" alt="logo canal alura">
<h3>${titulo}</h3>
<p>${descricao}</p>
</div>
`;
  console.log(videoItem);
  return videoItem;
}

 async function listaVideo() {
  try{
    const videosApi = await conexaoApi.listarVideo();
   videosApi.forEach((elemento) => {
     //lista.appendChild(criarCard(elemento))// posso passar o obj inteiro
     lista.appendChild(
       criarCard(
         elemento.url,
         elemento.titulo,
         elemento.imagem,
        elemento.descricao
       )
     );
   });
   //console.log(videosApi)
   //listaVideosApi = videosApi;
   return videosApi;
  }catch(e){
    console.log(e);
    lista.innerHTML=`<h2 class = "mensagem__titulo"> Erro na lista de videos2</h2>` 
    
    
  }
 }

listaVideo();
//console.log(listaVideosApi);
//============================TESTE===================================
function testeAssincrono() {
  const objTeste = {
    user: "italo",
    prof: "aluno",
    criarCard,
  };
  console.log(objTeste);
  console.log(conexaoApi); // um obj de function

  console.log(conexaoApi.listarUsuario()); // retorna uma promessa

  conexaoApi
    .listarUsuario()
    .then((response) => {
      console.table(response);
    })
    .catch((err) => {
      console.log(err);
    });

  conexaoApi
    .listarProjetos()
    .then((response) => {
      console.table(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
//testeAssincrono();
//===============================================================
