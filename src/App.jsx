import "./App.css";
import CharacterDetail, {
   CharacterSubInfo,
   EpisodeList,
} from "./components/CharacterDetail";
import CharactersList from "./components/CharactersList";
import Navbar from "./components/NavBar";
import { allCharacters, character, episodes } from "./data/data";

const App = () => {
   return (
      <div className="app">
         <Navbar />
         <Main>
            <CharactersList characters={allCharacters} />
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
