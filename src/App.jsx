import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharactersList from "./components/CharactersList";
import NavBar, { Favorites, Search, SearchResult } from "./components/NavBar";
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
   const [query, setQuery] = useState("");

   const { characters, isLoading } = useCharacters(
      "https://rickandmortyapi.com/api/character?name",
      query,
   );

   const [selectedId, setSelectedId] = useState(null);

   const [favorites, setFavorites] = useLocalStorage("FAVORITES", []);

   const selectCharacterHandler = (id) => {
      setSelectedId((prevId) => (prevId === id ? null : id));
   };

   const addToFavoriteHandler = (character) => {
      setFavorites((prev) => [...prev, character]);
   };

   const deleteFromFavoritesHandler = (id) => {
      setFavorites((prev) => prev.filter((fav) => fav.id !== id));
   };

   const isAddToFavorite = favorites.map((fav) => fav.id).includes(selectedId);

   return (
      <div className="app">
         <Toaster />
         <NavBar>
            <Search
               query={query}
               onChange={({ target }) => setQuery(target.value)}
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

const Main = ({ children }) => {
   return <main className="main">{children}</main>;
};
