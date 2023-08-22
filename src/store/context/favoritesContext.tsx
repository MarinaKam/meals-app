import { createContext, ReactNode, useState } from 'react';

export interface FavoritesContextInterface {
  selectedIDs: string[];
  isFavoriteId: (id: string) => boolean;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export interface FavoritesProviderInterface {
  children: ReactNode;
}

export const FavoritesContext = createContext<FavoritesContextInterface>({
  selectedIDs: [],
  isFavoriteId: () => false,
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesProvider = ({ children }: FavoritesProviderInterface) => {
  const [selectedIDs, setSelectedIDs] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setSelectedIDs((currentFavIDs) => [...currentFavIDs, id]);
  };

  const removeFavorite = (id: string) => {
    setSelectedIDs((currentFavIDs) => currentFavIDs.filter((mealId) => mealId !== id));
  };

  const isFavoriteId = (id: string) => selectedIDs.includes(id);

  const providerValue = {
    selectedIDs,
    addFavorite,
    removeFavorite,
    isFavoriteId,
  };

  return <FavoritesContext.Provider value={providerValue}>{children}</FavoritesContext.Provider>;
};
