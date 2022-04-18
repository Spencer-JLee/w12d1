export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchAPokemon = (pokemonId) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemonId}`
  });
};

export const fetchItems = (pokemonId) => {
  return $.ajax({
    method: "GET",
    url: "/api/items"
  });
};

export const fetchAllMoves = () => {
  return $.ajax({
    method: "GET",
    url: "/api/moves"
  });
};

export const fetchAMove = (moveId) => {
  return $.ajax({
    method: "GET",
    url: `/api/moves/${moveId}`
  });
};