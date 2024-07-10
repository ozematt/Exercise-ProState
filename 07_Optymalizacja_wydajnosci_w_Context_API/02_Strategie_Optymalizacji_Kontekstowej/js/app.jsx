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
    <FavoritesContext.Provider value={{ favorites: contextFavorites, removeFavorites, addFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook
export const useFavorites = () => useContext(FavoritesContext);

//component
const Gallery = () => {
  const { favorites, removeFavorites, addFavorites } = useFavorites();

  return (
    <>
      <div>
        <h3>Gallery:</h3>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              style={{
                height: '50px',
                width: '50px',
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
            <button onClick={() => removeFavorites(photo)}>Remove from Fav</button>
          </div>
        ))}
      </div>
    </>
  );
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
