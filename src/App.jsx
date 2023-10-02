import "./App.css";
import CharactersList from "./components/CharactersList";
import Navbar from "./components/NavBar";
import { allCharacters } from "./data/data";

const App = () => {
   return (
      <div className="app">
         <Navbar />
         <Main>
            <CharactersList characters={allCharacters} />
         </Main>
      </div>
   );
};

export default App;

const Main = ({ children }) => {
   return <main className="main">{children}</main>;
};
