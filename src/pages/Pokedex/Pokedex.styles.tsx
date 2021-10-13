import styled, { css } from "styled-components";

interface PokemonContainerProps {
  $loading: boolean;
}

export const Container = styled.div`
  align-items: center;
  background-color: #f6f7fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 12px;
  display: grid;
  grid-gap: 40px;
  padding: 24px;
  width: 100%;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: left;
`;

export const PokemonsContainer = styled.div<PokemonContainerProps>`
  display: grid;
  grid-template-columns: ${({ $loading }) => ($loading ? "1fr" : "1fr 1fr")};
  ${({ $loading }) =>
    $loading &&
    css`
      > span {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }
    `};

  grid-gap: 20px;

  overflow: hidden;
  max-height: 500px;
  overflow-y: auto;
`;

export const Image = styled.img`
  width: 100px;
`;
export const PokeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`;

export const PokemonName = styled.div`
  text-align: left;
  display: none;

  @media (min-width: 500px) {
    display: block;
    min-width: 90px;
  }
`;
