import * as pass from "./chaveApi.js";

async function importarFilmes () {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${pass.chaveAPI}`
        }
      };
      
      const resposta = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options)
        
      const respostaJSON = await resposta.json();
      console.log(respostaJSON)
      return respostaJSON;
}

export default importarFilmes;
