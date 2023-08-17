import getFavoritos from "./getFavoritos.js";

async function filtrarFavoritos (buscador) {
    
    const returnFilmes = [];
    const favoritos = getFavoritos();

    favoritos.forEach(arrayFilmes => {
        if (arrayFilmes.title.includes(buscador.toLowerCase()) || arrayFilmes.original_title.includes(buscador.toLowerCase())) {
            returnFilmes.push(arrayFilmes);
        }
    });

    if (returnFilmes != '') return returnFilmes;
    
    const listaFilmes = document.getElementById("lista__filmes");
    if (favoritos != '') {
        listaFilmes.innerHTML = `<div class="centralizarDiv">Não foi encontrado nenhum filme que contenha "${buscador}" na sua lista de favoritos.</div>`;
        return false;
    }

    listaFilmes.innerHTML = '<div class="centralizarDiv">Você ainda não possui nenhum filme adicionado à sua lista de favoritos, que tal adicionar algum?</div>';
    return false;
}

export default filtrarFavoritos;