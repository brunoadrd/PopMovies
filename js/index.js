import importarFilmes from "./importaFilmes.js";
import buscarFilmes from "./buscaFilmes.js";
import criarCards from "./criarCard.js";
import existeFavorito from "./possuiFavorito.js";

const buscador = document.querySelector('input');
const filtroFavoritos = document.querySelector('#favoritos');

buscador.addEventListener('keyup', async (evento) => {
    
    if(!filtroFavoritos.checked) {
        const retornoBusca = await buscarFilmes(buscador.value);

        if (retornoBusca) criarCards(retornoBusca.results);
        return;
    }

    existeFavorito(buscador.value);
});

filtroFavoritos.addEventListener('change', async (e) => {
    if (e.target.checked) {
        existeFavorito(buscador.value);
        return true;
    }
    
    const retornoBusca = await buscarFilmes(buscador.value);

    if (retornoBusca) criarCards(retornoBusca.results);
});

window.onload = async function () {
    const filmes = await importarFilmes();

    criarCards(filmes.results);
};
