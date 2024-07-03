import { useReducer } from 'react';

const ActionTypes = {
  NEXT_PHOTO: 'nextPhoto',
  PREV_PHOTO: 'prevPhoto',
};

const galleryReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.NEXT_PHOTO:
      return {
        ...state,
        current: (state.current + 1) % state.photos.length, //Oblicza nowy indeks zdjęcia. Zwiększa obecny indeks o 1, a następnie używa operatora modulo (%), aby upewnić się, że jeśli dojdziemy do końca tablicy zdjęć, wracamy do początku (cykliczność).
      };
    case ActionTypes.PREV_PHOTO:
      return {
        ...state,
        current: (state.current - 1 + state.photos.length) % state.photos.length, //Oblicza nowy indeks zdjęcia. Zmniejsza obecny indeks o 1, a następnie dodaje długość tablicy zdjęć, aby uniknąć negatywnych wartości. Operator modulo (%) zapewnia cykliczność.
      };
    default:
      return state;
  }
};

export const useGallery = (photos) => {
  const [state, dispatch] = useReducer(galleryReducer, {
    photos,
    current: 0,
  });

  const handleNextPhoto = () => {
    dispatch({
      type: ActionTypes.NEXT_PHOTO,
    });
  };
  const handlePrevPhoto = () => {
    dispatch({
      type: ActionTypes.PREV_PHOTO,
    });
  };

  return {
    currentPhoto: state.photos[state.current], // return actual photo with current index
    handleNextPhoto,
    handlePrevPhoto,
  };
};
