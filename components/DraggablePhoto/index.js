import { useEffect } from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useSpring } from "react-spring";

import useMounted from "../../hooks/useMounted";

import { PhotoContainer, Image } from "./styles";

export default function DraggablePhoto({ src }) {
  const isMounted = useMounted();

  const [styles, api] = useSpring(() => null);

  useEffect(() => {
    api.start({
      from: { opacity: isMounted ? 0 : 1 },
      to: { opacity: 1 },
      config: { duration: 400 },
    });
  }, [src, api]);

  const dndConfig = {
    id: src,
  };

  const { isDragging, attributes, listeners, setNodeRef } =
    useDraggable(dndConfig);

  const { isOver, setNodeRef: setDroppableRef } = useDroppable(dndConfig);

  return (
    <PhotoContainer
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      isDragging={isDragging}
      isOver={isOver}
    >
      <Image style={styles} ref={setDroppableRef} src={src} alt="photo" />
    </PhotoContainer>
  );
}
