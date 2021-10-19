import React from "react";

import { pokeApi } from "../api";
import { PokemonChainRequest } from "../types/pokemonChainRequest";

export interface PokemonChain {
  imageURL: string;
  name: string;
  nextPokemon?: any;
  minLevel: number;
}

export const usePokemonChain = (url?: string) => {
  const [pokemon, setPokemon] = React.useState<PokemonChain[]>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (url) {
      pokeApi
        .get<PokemonChainRequest>(
          `/evolution-chain/${url?.split("/")[url?.split("/").length - 2]}`
        )
        .then(async ({ data }) => {
          const {
            chain: {
              evolves_to,
              species: { name, url },
            },
          } = data;
          const formattedPokemon = [
            {
              name,
              imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                url.split("/")[url.split("/").length - 2]
              }.png`,
              minLevel: 0,
            },
          ];

          getEvolutionChain(evolves_to, formattedPokemon);

          setPokemon(formattedPokemon);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
        });
    }
  }, [url]);

  return { pokemonChain: pokemon, loading };
};

function getEvolutionChain(evolvesTo: any[], array: any[]) {
  const [
    {
      species: { name, url },
      evolution_details,
      evolves_to,
    },
  ] = evolvesTo;

  const nextPokemonInfo = {
    name,
    imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      url.split("/")[url.split("/").length - 2]
    }.png`,
    minLevel: evolution_details[0].min_level,
  };

  console.log({ nextPokemonInfo, evolution_details });

  if (!array[array.length - 1].nextPokemon) {
    array[array.length - 1].nextPokemon = nextPokemonInfo;
    if (evolves_to.length > 0) {
      array.push(nextPokemonInfo);
    }
  }

  if (evolves_to.length > 0) getEvolutionChain(evolves_to, array);
  else {
    return;
  }
}
