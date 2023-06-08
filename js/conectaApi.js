console.log("pegar api do json-server");

async function listarVideo() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConverdida =  await conexao.json();
  // precisa do await pq o __.json() retorna uma promeesa
  //e o await garante que essa promessa seja resolvida antes de atribuir o resultado
  if(conexaoConverdida == null){
    throw new Error("vazio")
    // formca o erro ,  joga o erro pro catch no bloco try/catch pegar
  }
  return conexaoConverdida;
}

// const recebeVideo = listarVideo();
// console.log(recebeVideo.then((element) => console.table(element)));

async function listarUsuario() {
  const conexao = await fetch("http://localhost:3000/usuario");
  const conexaoConverdida = await conexao.json();
  return conexaoConverdida;
}

async function listarTarefas() {
  const conexao = await fetch("http://localhost:3000/tarefas");
  const conexaoConverdida = await conexao.json();
  return conexaoConverdida;
}
async function listarProjetos() {
  const conexao = await fetch("http://localhost:3000/projetos");
  const conexaoConverdida = await conexao.json();
  return conexaoConverdida;
}


async function addVideo(url,titulo,imagem,descricao) {
  const horas = new Date();
  console.log(horas.toLocaleDateString());
  const conexao = await fetch("http://localhost:3000/videos",{
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body : JSON.stringify({
            url: url,
            titulo:titulo,
            imagem:imagem,
            descricao: `${descricao} numero de visualização ${horas.toLocaleDateString()}`
            }),
    });
    // ta dizendo conexao nao ok, teve algum erro na hora de dar post nos dados
    if(!conexao.ok){
      throw  new Error("Erro no envio do video")
    }
  const videoConvertido = await conexao.json();
  console.log(videoConvertido)

  return videoConvertido;
}


async function buscarVideo(pesquisa){
      const temaPesquisa = pesquisa;
      const conexao = await fetch(`http://localhost:3000/videos?q=${temaPesquisa}`)
      const buscarConvertida = await conexao.json()
      return buscarConvertida
}



export const conexaoApi = {
  listarVideo,
  listarUsuario,
  listarTarefas,
  listarProjetos,
  addVideo,
  buscarVideo
};

//console.log(conexaoApi)
