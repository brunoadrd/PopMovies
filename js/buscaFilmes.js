import * as pass from "./chaveApi.js";
import importarFilmes from "./importaFilmes.js";

async function buscarFilmes (filme) {

  if (filme == '') return await importarFilmes();

  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${pass.chaveAPI}`
      }
    };

    const respostaFilmes = await fetch(`https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false&language=pt-BR&page=1`, options);
    const respostaJSON = await respostaFilmes.json(); 

    if (respostaJSON.results != '') return respostaJSON;

    const listaFilmes = document.getElementById("lista__filmes");
    listaFilmes.innerHTML = `<div class="nenhumFavorito">Não foi encontrado nenhum filme com o título "${filme}", poderia tentar novamente?</div>`;

    return false;
}

export default buscarFilmes;
