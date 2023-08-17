import filtrarFavoritos from "./filtroFavoritos.js";
import criarCards from "./criarCard.js";

async function existeFavorito(buscador) {
 
    const retornoFavoritos = await filtrarFavoritos(buscador);

    if (retornoFavoritos != '') criarCards(retornoFavoritos);
}

export default existeFavorito;