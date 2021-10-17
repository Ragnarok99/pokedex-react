import React from "react";

import { pokeApi } from "../api";
import { PokemonChain } from "../types/pokemonChain";

export const usePokemonChain = (id?: number) => {
  const [pokemon] = React.useState<PokemonChain>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (id) {
      pokeApi
        .get<PokemonChain>(`/evolution-chain/${id}`)
        .then(async ({ data }) => {
          const formattedPokemon: any = [];

          getEvolutionChain(data.chain.evolves_to, formattedPokemon);

          // setPokemon({ ...formattedPokemon });
          console.log(formattedPokemon);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  return { pokemon, loading };
};

function getEvolutionChain(evolvesTo: any, array: any) {
  const [
    {
      species: { name },
      evolves_to,
    },
  ] = evolvesTo;

  array.push(name);
  console.log(evolves_to);

  if (evolves_to.lenght > 0) getEvolutionChain(evolves_to, array);
  else {
    array.push(name);

    return;
  }
}
