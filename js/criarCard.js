import importarFavoritos from "./importaFavoritos.js";
import favoritar from "./favoritaFilmes.js";

function criarCards (filmes) {
    const listaFilmes = document.getElementById("lista__filmes");
    const objFilmes = [];

    listaFilmes.innerHTML = '';

    if (filmes !== undefined) {
        filmes.forEach(filme => {
            const {id, title, vote_average, backdrop_path, release_date, overview} = filme;
            const imagem = backdrop_path === null ? '/images/semcapa.png' : `https://image.tmdb.org/t/p/w500${backdrop_path}`
            const anoFilme = new Date(release_date).getFullYear()

            const favorito = importarFavoritos(id) ? true : false;

            let temp = `
                <ul class="info__filme">
                    <img class="capa__filme" src="${imagem}" alt="Poster do filme ${title}">

                    <div class="filme__status">
                        <h2 class="filme__status-titulo">${title} - ${anoFilme}</h2>
                        <div class="container__icones">
                            <div class="avaliacao">
                                <img class="filme__status-icone" src="/images/icons/star.svg" alt="Ícone de estrela">
                                <label class="filme__status-label">${vote_average.toFixed(1)}</label>
                            </div>
                            <div class="favoritar" id=${id}>
            `;

            if (favorito) {
                temp += `
                                <img class="filme__status-icone preenchido" id="icone__favorito" src="/images/icons/heart-selecionado.svg" alt="Ícone de coração preenchido">
                `;
            } else {
                temp += `
                                <img class="filme__status-icone" id="icone__favorito" src="/images/icons/heart.svg" alt="Ícone de coração vazio">
                `;
            }

            temp += `
                                <label class="filme__status-label" for="icone__favorito">Favoritar</label>
                            </div>
                        </div>
                    </div>

                    <p class="filme__descricao">${overview}</p>
                </ul>
            `;

            listaFilmes.innerHTML += temp;

            objFilmes.push(filme);
            
        });

        const botoesIcones = document.getElementsByClassName('favoritar');

        for (let i = 0; i < botoesIcones.length; i++) {
            for(let x = 0; x < objFilmes.length; x++) {
                if (botoesIcones[i].id == objFilmes[x].id) {
                    botoesIcones[i].addEventListener('click', e => favoritar(e, objFilmes[x]));
                }
            }
        }
        return;
    }
    listaFilmes.innerHTML = "teste";
}

export default criarCards;
