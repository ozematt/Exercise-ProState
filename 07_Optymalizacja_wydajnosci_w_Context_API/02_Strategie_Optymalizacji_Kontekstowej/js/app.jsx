import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { photos } from './data';
import { createRoot } from 'react-dom/client';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter((photo) => photo.id !== action.payload.id);
    default:
      return state;
  }
};

// Provider
export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  // Uzupełnij kod i użyj useMemo
  const contextFavorites = useMemo(() => favorites, [favorites]);

  // Stwórz funkcje `addFavorite` i `removeFavorite` do zarządzania ulubionymi zdjęciami
  // Wykorzystaj `dispatch` do wywołania akcji i useCallback do optymalizacji

  const addFavorites = useCallback((photo) => {
    dispatch({ type: 'ADD_FAVORITE', payload: photo });
  });
  const removeFavorites = useCallback((photo) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: photo });
  });

  return (
    <FavoritesContext.Provider value={{ contextFavorites, addFavorites, removeFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook
export const useFavorites = () => useContext(FavoritesContext);

// Komponent galerii (do uzupełnienia przez kursanta)
const Gallery = () => {
  // const { favorites, addFavorites, removeFavorites } = useFavorites();

  return (
    <>
      <div>
        {photos.map((photo) => (
          <img src={photo.url} alt={photo.title} key={photo.id}>
            <button>Add to fav</button>
            <button>Remove from fav</button>
          </img>
        ))}
      </div>
      {/*{favorites?.map((photo) => (*/}
      {/*  <img src={photo.url} alt={photo.title} key={photo.id} />*/}
      {/*))}*/}
    </>
  );
  // [Twoje zadanie: Uzupełnij logikę wykorzystując `useFavorites` do wyświetlania ulubionych zdjęć]
};

const App = () => {
  return <Gallery />;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
