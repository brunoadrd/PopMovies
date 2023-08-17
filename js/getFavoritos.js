function getFavoritos () {
    return JSON.parse(localStorage.getItem('Favoritos')) || [];
}

export default getFavoritos;