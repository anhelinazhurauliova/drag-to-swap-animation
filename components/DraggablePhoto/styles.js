import styled from "styled-components";
import { animated } from "react-spring";

export const PhotoContainer = styled.div`
  cursor: grab;
  opacity: ${(props) =>
    props.isDragging ? "0.7" : props.isOver ? "0.85" : "1"};
`;

export const Image = styled(animated.img)`
  max-width: 100%;
`;
