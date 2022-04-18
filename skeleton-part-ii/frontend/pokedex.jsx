import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {requestAllMoves,requestAMove} from "./actions/moves_action";
// import {requestAllItems,requestAnItem} from "./actions/items_actions";
import {requestSinglePokemon} from "./actions/pokemon_actions";


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);
  window.store = store;
  window.requestSinglePokemon = requestSinglePokemon;
  // window.requestAMove = requestAMove;
  // window.requestAllItems = requestAllItems;
  // window.requestAnItem = requestAnItem;
  // window.requestAllPokemon = requestAllPokemon;
  // window.requestAPokemon = requestAPokemon;
});