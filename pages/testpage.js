import { useState } from "react";
import Head from "next/head";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import PrintPage from "../components/PrintPage";
import { positioningFromEventStart } from "../utils/dndModifier";
import { swapImages } from "../utils/swapImages";
import {
  PageHeader,
  DraggablePhotoOverlay,
  DragOverlay,
} from "../styles/pages/testpage";

const data = [
  {
    title: "Front Print",
    images: [
      "https://videodelivery.net/775b1b7196b2c126b8dc343416211fdb/thumbnails/thumbnail.jpg?height=1080",
    ],
  },
  {
    title: "Page 2",
    images: [
      "https://videodelivery.net/9ad2bb839e4e3cc1074e5d73b0a0379b/thumbnails/thumbnail.jpg?height=1080",
      "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/bde5b129-52ba-4f43-b3f4-97591952ea00/large",
    ],
  },
  {
    title: "Page 3",
    images: [
      "https://videodelivery.net/91097538e177847ebeb934a492e146e9/thumbnails/thumbnail.jpg?height=1080",
      "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/b73c2865-7a02-408b-654d-89ce2512ae00/large",
    ],
  },
];

export default function TestPage() {
  const [pages, setPages] = useState(data);
  const [activeImage, setActiveImage] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const onDragStart = (e) => {
    if (e.active) {
      setActiveImage(e.active.id);
    }
  };

  const onDragEnd = (e) => {
    const { over } = e;

    if (over?.id && activeImage && over?.id !== activeImage) {
      const updatedPages = pages.map((page) => ({
        ...page,
        images: [...swapImages(page.images, activeImage, over.id)],
      }));

      setPages(updatedPages);
    }

    setActiveImage(null);
  };

  return (
    <>
      <Head>
        <title>Test Page | Popsa.com</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader>
        <h1>Trip to the Beach</h1>
        <p>Hardback Photobook last edited on Thursday 13 April 2022 at 16:28</p>
      </PageHeader>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <PrintPage data={pages} />
        <DragOverlay
          modifiers={[positioningFromEventStart]}
          image={activeImage}
          dropAnimation={null}
        >
          {activeImage && (
            <DraggablePhotoOverlay src={activeImage} alt="draggable photo" />
          )}
        </DragOverlay>
      </DndContext>
    </>
  );
}
