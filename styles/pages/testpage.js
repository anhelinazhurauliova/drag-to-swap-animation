import styled from "styled-components";
import { DragOverlay as DndDragOverlay } from "@dnd-kit/core";

export const PageHeader = styled.div`
  width: 600px;
  margin: auto;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 42px;
  padding-bottom: 24px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.36px;
    color: #585858;
    margin-bottom: 8px;
  }

  p {
    color: #797979;
    margin: 0;
  }
`;

export const DraggablePhotoOverlay = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 5px solid white;
  border-radius: 50%;
`;

export const DragOverlay = styled(DndDragOverlay)`
  cursor: none;
`;
