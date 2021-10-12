import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export interface CardProps extends LinkProps {
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

export const CardContainer = styled(Link)<CardProps>`
  align-items: center;
  background-color: ${({ color }) => (color ? color : "inherit")};
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  padding: 20px;

  min-height: 80px;
  overflow: hidden;
  position: relative;
  text-decoration: none;

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

export const CardContent = styled.div`
  position: relative;
`;
