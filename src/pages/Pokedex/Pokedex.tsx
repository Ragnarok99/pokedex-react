import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router";

import { Card } from "../../components/Card";
import { usePokemons } from "../../hooks/usePokemons";
import {
  Container,
  Content,
  Header,
  Image,
  PokemonsContainer,
  PokeWrapper,
  Title,
} from "./Pokedex.styles";

export const Pokedex = () => {
  const { pokemons } = usePokemons();
  const history = useHistory();

  const goBack = () => {
    void history.push("/");
  };

  return (
    <Container>
      <Content>
        <Header>
          <FaArrowLeft onClick={goBack} />
          <GiHamburgerMenu />
        </Header>
        <Title>Pokedex</Title>
        <PokemonsContainer>
          {pokemons.map((pokemon: any) => (
            <Card
              key={pokemon.name}
              shadow={`rgb(${pokemon.colors[1]})`}
              color={`rgb(${pokemon.colors[2]})`}
              to="hola"
            >
              <PokeWrapper>
                <div>
                  <span>{pokemon.name}</span>
                </div>
                <Image alt={pokemon.name} src={pokemon.imageURL} />
              </PokeWrapper>
            </Card>
          ))}
        </PokemonsContainer>
      </Content>
    </Container>
  );
};
