import { ReactComponent as PokeBallSVG } from "../assets/svg/pokeball.svg";

import {
  CardContainer,
  StyledCardProps,
  LeftCornerCircle,
  PokeContainer,
} from "./Card.styles";

interface CardProps extends StyledCardProps {
  text: string;
}

export const Card = (props: CardProps) => {
  return (
    <CardContainer shadow={props.shadow} color={props.color} to={props.to}>
      <LeftCornerCircle />
      <PokeContainer>
        <PokeBallSVG />
      </PokeContainer>
      <span>{props.text}</span>
    </CardContainer>
  );
};
