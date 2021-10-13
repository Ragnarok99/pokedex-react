import styled from "styled-components";

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
  border-radius: 8px;
  width: 100%;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const PokemonName = styled.h1`
  padding-top: 0;
  font-size: 30px;
`;

export const ImageSection = styled.section<{ $color?: string }>`
  background-color: ${({ $color }) => ($color ? `rgb(${$color})` : "white")};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  display: grid;
  grid-gap: 40px;

  padding: 16px;
  padding-bottom: 80px;
`;

export const InfoSection = styled.section`
  background-color: white;

  border-radius: 30px;

  height: 100%;
  min-height: 300px;
  margin-top: -50px;
  padding: 16px;

  padding-top: 40px;
`;

export const Image = styled.img`
  width: 50%;
`;

export const Header = styled.div`
  svg {
    path {
      fill: white;
    }
  }
`;
