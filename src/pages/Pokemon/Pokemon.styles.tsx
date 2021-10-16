import styled from "styled-components";

interface Colorable {
  $color?: string;
  $shadow?: string;
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
  border-radius: 8px;
  width: 100%;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const PokemonName = styled.h1`
  padding-top: 0;
  font-size: 30px;
  text-transform: capitalize;
`;

export const ImageSection = styled.section<Colorable>`
  background-color: ${({ $color }) => ($color ? `rgb(${$color})` : "white")};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52vh;
  padding: 50px 32px;
  padding-bottom: 80px;
  z-index: 1;

  > svg {
    transform: scale(9);
    margin: 0 auto;
    path {
      fill: ${({ $shadow }) => `rgba(${$shadow} / 70%)`};
    }
  }
`;

export const InfoSection = styled.section`
  background-color: white;

  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 51vh;
  min-height: 300px;
  margin-top: -50px;
  padding: 16px;
  padding-top: 40px;
  position: relative;
`;

export const Image = styled.img`
  margin-top: -100%;
  width: 300px;
  z-index: 2;
  @media (min-width: 356px) {
    margin-top: -80%;
  }

  @media (min-width: 375px) {
    margin-top: -50%;
  }
`;

export const Header = styled.div`
  padding-bottom: 150px;

  > div:first-child {
    padding: 30px 0;
  }
  > div:nth-child(2) {
    padding: 8px 0;
  }
  .go-back {
    transform: scale(3);
  }
  .like {
    transform: scale(2);
  }
  svg {
    path {
      fill: white;
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Chip = styled.span<Colorable>`
  background-color: ${({ $shadow }) => `rgba(${$shadow} / 100%)`};
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 16px 6px;
  text-transform: capitalize;

  & + & {
    margin-left: 8px;
  }
`;

export const PokemonNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const SkeletonWrapper = styled.div`
  span {
    border-radius: 30px;
    height: 100vh;
  }
`;
