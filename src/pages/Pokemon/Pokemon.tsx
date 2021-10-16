import React from "react";
import { IoIosArrowRoundBack, IoIosHeartEmpty } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import { useParams, useHistory } from "react-router-dom";

import { ReactComponent as PokeballSVG } from "../../assets/svg/pokeball.svg";
import { usePokemon } from "../../hooks/usePokemon";
import {
  Chip,
  Container,
  Content,
  Header,
  Grid,
  Image,
  ImageSection,
  InfoSection,
  PokemonName,
  PokemonNumber,
  SkeletonWrapper,
} from "./Pokemon.styles";

export const Pokemon = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const { name } = useParams<{ name: string }>();
  const history = useHistory();

  const { pokemon, loading } = usePokemon(name);

  const goBack = React.useCallback(() => {
    void history.push("/pokedex");
  }, [history]);

  return (
    <Container>
      <Content>
        {loading && !imageLoaded ? (
          <Skeleton wrapper={SkeletonWrapper} />
        ) : (
          <>
            <ImageSection
              $shadow={String(pokemon?.colors[1]).replaceAll(",", " ")}
              $color={String(pokemon?.colors[2])}
            >
              <Header>
                <Grid>
                  <IoIosArrowRoundBack className="go-back" onClick={goBack} />
                  <IoIosHeartEmpty className="like" onClick={goBack} />
                </Grid>
                <Grid>
                  <PokemonName>{pokemon?.name}</PokemonName>
                  <PokemonNumber>#{pokemon?.id}</PokemonNumber>
                </Grid>
                <Grid>
                  <Grid>
                    {pokemon?.types.map(({ type: { name } }) => (
                      <Chip
                        $shadow={String(pokemon?.colors[1]).replaceAll(
                          ",",
                          " "
                        )}
                        key={name}
                      >
                        {name}
                      </Chip>
                    ))}
                  </Grid>
                  <Grid>
                    <span>{pokemon?.name}</span>
                  </Grid>
                </Grid>
              </Header>
              <PokeballSVG />
            </ImageSection>
            <InfoSection>
              <Image
                height="300"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                src={pokemon?.main_image}
                alt={pokemon?.name}
              />
              Pokemon news
            </InfoSection>
          </>
        )}
      </Content>
    </Container>
  );
};
