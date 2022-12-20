import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PokemonChain } from "../../../hooks/usePokemonChain";

import { Container, Level } from "./Chain.styles";

export const Chain: React.FC<PokemonChain> = ({
  name,
  imageURL,
  nextPokemon,
}) => {
  return (
    <Container>
      <Link to={{ pathname: `/pokemon/${name}` }} replace>
        <img src={imageURL} alt={name} />
        <span>{name}</span>
      </Link>
      <div>
        <FaLongArrowAltRight />
        <Level>
          {nextPokemon.minLevel ? `Lvl ${nextPokemon.minLevel}` : "Needs item"}
        </Level>
      </div>
      <Link to={{ pathname: `/pokemon/${nextPokemon.name}` }} replace>
        <img src={nextPokemon.imageURL} alt={nextPokemon.name} />
        <span>{nextPokemon.name}</span>
      </Link>
    </Container>
  );
};
