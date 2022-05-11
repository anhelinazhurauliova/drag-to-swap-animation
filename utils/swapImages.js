export const swapImages = (images, activeImage, overImage) =>
  images.map((image) => {
    if (image === overImage) {
      return activeImage;
    } else if (image === activeImage) {
      return overImage;
    }

    return image;
  });
