import { useEffect } from "react";

export const useImagePreload = (imageSrc: string) => {
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
  }, [imageSrc]);
};

export const preloadImages = (imageSources: string[]) => {
  imageSources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
