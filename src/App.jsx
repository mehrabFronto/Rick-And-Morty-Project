import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharactersList from "./components/CharactersList";
import Navbar, { Search, SearchResult } from "./components/NavBar";
import useCharacters from "./hooks/useCharacters";

const App = () => {
   const [query, setQuery] = useState("");

   const { characters, isLoading } = useCharacters(
      "https://rickandmortyapi.com/api/character?name",
      query,
   );

   const [selectedId, setSelectedId] = useState(null);

   const selectCharacterHandler = (id) => {
      setSelectedId((prevId) => (prevId === id ? null : id));
   };

   return (
      <div className="app">
         <Toaster />
         <Navbar>
            <Search
               query={query}
               onChange={({ target }) => setQuery(target.value)}
            />
            <SearchResult numOfResult={characters.length} />
         </Navbar>
         <Main>
            <CharactersList
               characters={characters}
               isLoading={isLoading}
               selectedId={selectedId}
               selectCharacterHandler={selectCharacterHandler}
            />
            <CharacterDetail selectedId={selectedId} />
         </Main>
      </div>
   );
};

export default App;

const Main = ({ children }) => {
   return <main className="main">{children}</main>;
};
