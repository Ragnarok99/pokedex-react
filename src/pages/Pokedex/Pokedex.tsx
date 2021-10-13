import { useHistory } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Skeleton from "react-loading-skeleton";

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
  const { pokemons, loading } = usePokemons();
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
        <PokemonsContainer loading={loading}>
          {loading ? (
            <Skeleton count={10} style={{ height: 80 }} />
          ) : (
            pokemons.map((pokemon: any) => (
              <Card
                key={pokemon.name}
                shadow={`rgb(${pokemon.colors[1]})`}
                color={`rgb(${pokemon.colors[2]})`}
                to="hola"
              >
                <PokeWrapper>
                  <span>{pokemon.name}</span>
                  <Image
                    loading="lazy"
                    alt={pokemon.name}
                    src={pokemon.imageURL}
                  />
                </PokeWrapper>
              </Card>
            ))
          )}
        </PokemonsContainer>
      </Content>
    </Container>
  );
};
