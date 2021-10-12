import React from "react";
import { pokeApi } from "../api";

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
export const usePokemons = () => {
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    pokeApi.get("/pokemon/?offset=1&limit=20").then((response) => {
      let pokeData: any[] = response.data;
      //pokeData.forEach)
      setPokemons(response.data);
    });
  }, []);

  return { pokemons };
};
