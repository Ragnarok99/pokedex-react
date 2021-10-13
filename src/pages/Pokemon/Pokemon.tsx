import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";

import { usePokemon } from "../../hooks/usePokemon";
import {
  Container,
  Header,
  Image,
  ImageSection,
  InfoSection,
  Content,
  PokemonName,
} from "./Pokemon.styles";

export const Pokemon = () => {
  const { name } = useParams<{ name: string }>();
  const history = useHistory();

  const { pokemon } = usePokemon(name);

  const goBack = React.useCallback(() => {
    void history.push("/pokedex");
  }, [history]);

  return (
    <Container>
      <Content>
        <ImageSection $color={String(pokemon?.colors[2])}>
          <PokemonName></PokemonName>
          <Header>
            <FaArrowLeft onClick={goBack} />
          </Header>
          <Image src={pokemon?.main_image} alt={pokemon?.name} />
        </ImageSection>
        <InfoSection>Pokemon news</InfoSection>
      </Content>
    </Container>
  );
};
