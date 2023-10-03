import { Toaster } from "react-hot-toast";
import "./App.css";
import CharacterDetail, {
   CharacterSubInfo,
   EpisodeList,
} from "./components/CharacterDetail";
import CharactersList from "./components/CharactersList";
import Navbar from "./components/NavBar";
import { character, episodes } from "./data/data";
import useCharacters from "./hooks/useCharacters";

const App = () => {
   const { characters, isLoading } = useCharacters(
      "https://rickandmortyapi.com/api/character",
   );

   return (
      <div className="app">
         <Toaster />
         <Navbar />
         <Main>
            <CharactersList
               characters={characters}
               isLoading={isLoading}
            />
            <CharacterDetail
               character={character}
               episodes={episodes}>
               <CharacterSubInfo character={character} />
               <EpisodeList episodes={episodes} />
            </CharacterDetail>
         </Main>
      </div>
   );
};

export default App;

const Main = ({ children }) => {
   return <main className="main">{children}</main>;
};
