import getFavoritos from "./getFavoritos.js";
import criarCards from "./criarCard.js";
import existeFavorito from "./possuiFavorito.js";

async function favoritar (e, objFilme) {

    const itensArmazenados = getFavoritos();
    const filme = itensArmazenados.find(filme => filme.id == objFilme.id)
    
    if (filme) {

        const filtrar = itensArmazenados.filter(filtro => filtro.id != filme.id)
        
        
        e.target.src = '../images/icons/heart.svg';
        
        localStorage.setItem('Favoritos', JSON.stringify(filtrar));
        
        const buscador = document.querySelector('input');
        const filtroFavoritos = document.querySelector('#favoritos');

        if(filtrar == '' && filtroFavoritos.checked) {
            const listaFilmes = document.getElementById("lista__filmes");
            listaFilmes.innerHTML = '<div class="centralizarDiv">Você ainda não possui nenhum filme adicionado à sua lista de favoritos, que tal adicionar algum?</div>';
        } else if (buscador.value != '' && filtroFavoritos.checked) {
            await existeFavorito(buscador.value);
        } else if (buscador.value == '' && filtroFavoritos.checked) {
            criarCards(getFavoritos());
        }

        return;
    }

    e.target.src = '../images/icons/heart-selecionado.svg';

    itensArmazenados.push(objFilme);
    
    localStorage.setItem('Favoritos', JSON.stringify(itensArmazenados));
}

export default favoritar;
