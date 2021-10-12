import { usePokemons } from "../../hooks/usePokemons";
import { Container, Content } from "./Pokedex.styles";

export const Pokedex = () => {
  const { pokemons } = usePokemons();
  console.log(pokemons);
  return (
    <Container>
      <Content>POkedex</Content>
    </Container>
  );
};
