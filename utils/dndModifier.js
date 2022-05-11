import { getEventCoordinates, isKeyboardEvent } from "@dnd-kit/utilities";

const dragOverlayWidth = 40;

export const positioningFromEventStart = ({
  activatorEvent,
  activeNodeRect,
  transform,
}) => {
  if (activatorEvent && !isKeyboardEvent(activatorEvent)) {
    const { x: activatorX, y: activatorY } =
      getEventCoordinates(activatorEvent);

    return {
      ...transform,
      x: transform.x + activatorX - activeNodeRect.left - dragOverlayWidth,
      y: transform.y + activatorY - activeNodeRect.top - dragOverlayWidth,
    };
  }

  return transform;
};
