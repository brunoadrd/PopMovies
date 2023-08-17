import getFavoritos from "./getFavoritos.js";

function importarFavoritos (id) {
    return getFavoritos().find(filme => filme.id == id);
}

export default importarFavoritos;
