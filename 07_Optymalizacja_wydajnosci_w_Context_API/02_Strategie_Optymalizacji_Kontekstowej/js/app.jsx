import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { photos } from './data';
import { createRoot } from 'react-dom/client';

const FavoritesContext = createContext();

const initialState = {
  favorites: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter((photo) => photo.id !== action.payload.id) };
    default:
      return state;
  }
};

// Provider
export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  return <FavoritesContext.Provider value={{ state, dispatch }}>{children}</FavoritesContext.Provider>;
};

// Hook
export const useFavorites = () => {
  const { state, dispatch } = useContext(FavoritesContext);
  console.log(state);
  const contextFavorites = useMemo(() => state.favorites, [state.favorites]);

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
  return { favorites: contextFavorites, removeFavorites, addFavorites };
};

// Komponent galerii (do uzupełnienia przez kursanta)
const Gallery = () => {
  const { favorites, removeFavorites, addFavorites } = useFavorites();

  return (
    <>
      <div>
        <h3>Gallery:</h3>
        {photos.map((photo) => (
          <div key={photo.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img
              style={{
                height: '150px',
                width: '150px',
              }}
              src={photo.url}
              alt={photo.title}
            />
            <button onClick={() => addFavorites(photo)}>Add to Fav</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Favorites:</h3>
        {favorites.map((photo) => (
          <div key={photo.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img
              style={{
                height: '150px',
                width: '150px',
              }}
              src={photo.url}
              alt={photo.title}
            />
            <button onClick={() => removeFavorites(photo)}>Add to Fav</button>
          </div>
        ))}
      </div>
    </>
  );
  // [Twoje zadanie: Uzupełnij logikę wykorzystując `useFavorites` do wyświetlania ulubionych zdjęć]
};

const App = () => {
  return (
    <FavoritesProvider>
      <Gallery />
    </FavoritesProvider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
