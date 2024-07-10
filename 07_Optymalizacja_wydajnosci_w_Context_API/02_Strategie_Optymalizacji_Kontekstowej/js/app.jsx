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
  const [state, dispatch] = useReducer(favoritesReducer, []);

  const contextFavorites = useMemo(() => state, [state]);

  const addFavorites = useCallback(
    (photo) => {
      dispatch({ type: 'ADD_FAVORITE', payload: photo });
    },
    [dispatch]
  );
  const removeFavorites = useCallback(
    (photo) => {
      dispatch({ type: 'REMOVE_FAVORITE', payload: photo });
    },
    [dispatch]
  );

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
  const { addFavorites, removeFavorites } = useFavorites();

  return (
    <>
      <div>
        <h3>Gallery:</h3>
        {photos.map((photo) => (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img
              style={{
                height: '150px',
                width: '150px',
              }}
              src={photo.url}
              alt={photo.title}
              key={photo.id}
            />
            <button onClick={() => addFavorites}>Add to Fav</button>
          </div>
        ))}
      </div>
      {/*{contextFavorites.map((favPhoto) => (*/}
      {/*  <img src={favPhoto.url} alt={favPhoto.title} key={favPhoto.id} />*/}
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
