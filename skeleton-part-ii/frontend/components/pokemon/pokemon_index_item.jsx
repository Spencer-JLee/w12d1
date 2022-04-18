import React from "react";
import { Link } from "react-router-dom";

export const PokemonIndexItem = (props) => {
    return (
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <ul className="pokemon-index-item">
                <img src={props.pokemon.imageUrl} />
                <li>{props.pokemon.name}</li>
            </ul>
        </Link>
    )
};