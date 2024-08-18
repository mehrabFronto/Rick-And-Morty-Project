import { ReactNode, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharactersList from "./components/CharactersList";
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";
import NavBar, { Favorites, Search, SearchResult } from "./components/Navbar";
import { CharacterType } from "./types/CharacterType";
import SwDev from "./SwDev";

type FavoriteType = [CharacterType[], React.Dispatch<CharacterType[]>];

const App = () => {
  const [query, setQuery] = useState("");

  const { characters, isLoading } = useCharacters(
    "https://rickandmortyapi.com/api/character?name",
    query
  );

  const [selectedId, setSelectedId] = useState<null | number>(null);

  const [favorites, setFavorites] = useLocalStorage(
    "FAVORITES",
    []
  ) as FavoriteType;

  const selectCharacterHandler = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const addToFavoriteHandler = (character: CharacterType) => {
    setFavorites([...favorites, character]);
  };

  const deleteFromFavoritesHandler = (id: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const isAddToFavorite = favorites.map((fav) => fav.id).includes(selectedId!);

  return (
    <div className="app">
      <SwDev />
      <Toaster />
      <NavBar>
        <Search
          query={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <SearchResult numOfResult={characters.length} />
        <Favorites
          numOfFavorites={favorites.length}
          favorites={favorites}
          onDeleteFromFavorites={deleteFromFavoritesHandler}
        />
      </NavBar>
      <Main>
        <CharactersList
          characters={characters}
          isLoading={isLoading}
          selectedId={selectedId}
          selectCharacterHandler={selectCharacterHandler}
        />
        <CharacterDetail
          selectedId={selectedId}
          onAddToFavorite={addToFavoriteHandler}
          isAddToFavorite={isAddToFavorite}
          onCloseSelectedCharacter={() => setSelectedId(null)}
        />
      </Main>
    </div>
  );
};

export default App;

const Main = ({ children }: { children: ReactNode }) => {
  return <main className="main">{children}</main>;
};
