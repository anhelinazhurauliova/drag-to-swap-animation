import { getEventCoordinates, isKeyboardEvent } from "@dnd-kit/utilities";

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
      x: transform.x + activatorX - activeNodeRect.left - 40, //'40' is based on the overlay measurements
      y: transform.y + activatorY - activeNodeRect.top - 40,
    };
  }

  return transform;
};
