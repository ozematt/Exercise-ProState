import { useReducer } from 'react';

const galleryReducer = (state, action) => {
  // Implementacja reducer
};

export const useGallery = (photos) => {
  const [state, dispatch] = useReducer(galleryReducer, {
    photos,
    currentPhotoIndex: 0,
  });

  // Implementacja logiki zmiany zdjęć

  return { currentPhoto, nextPhoto, prevPhoto };
};
