export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectItems = (state) => {
  return Object.values(state.entities.items);
};

export const selectMoves = (state, id) => {
  return Object.values(state.entities.pokemon[id].moves);
};
  