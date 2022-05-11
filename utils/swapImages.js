export const swapImages = (images, activeImage, overImage) => {
  return images.map((image) => {
    if (image === overImage) {
      return (image = activeImage);
    }
    if (image === activeImage) {
      return (image = overImage);
    }

    return image;
  });
};
