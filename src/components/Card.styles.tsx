import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export interface StyledCardProps extends LinkProps {
  color?: string;
  shadow?: string;
}

export const LeftCornerCircle = styled.div`
  background-color: red;
  border-radius: 50%;
  height: 50px;
  left: -20px;
  top: -20px;
  position: absolute;
  width: 50px;
`;

export const PokeContainer = styled.div`
  position: absolute;
  right: -20px;
  top: -35px;

  svg {
    width: 120px;
    height: 150px;
  }
`;

export const CardContainer = styled(Link)<StyledCardProps>`
  align-items: center;
  background-color: ${({ color }) => (color ? color : "inherit")};
  border-radius: 10px;
  color: white;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  padding: 20px;

  min-height: 80px;
  position: relative;
  overflow: hidden;

  ${LeftCornerCircle} {
    background-color: ${({ shadow }) => shadow};
  }

  ${PokeContainer} {
    svg {
      path {
        fill: ${({ shadow }) => shadow};
      }
    }
  }
`;
