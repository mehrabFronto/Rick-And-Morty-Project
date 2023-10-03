import { HeartIcon } from "@heroicons/react/24/outline";

const Navbar = ({ children }) => {
   return (
      <nav className="navbar">
         <Logo />
         {children}
         <Favorites />
      </nav>
   );
};

export default Navbar;

const Logo = () => {
   return <div className="navbar__logo">LOGO 😍</div>;
};

export function Search({ query, onChange }) {
   return (
      <input
         value={query}
         onChange={onChange}
         type="text"
         className="text-field"
         placeholder="search..."
      />
   );
}

export function SearchResult({ numOfResult }) {
   return <div className="navbar__result">Found {numOfResult} characters</div>;
}

function Favorites() {
   return (
      <>
         <button className="heart">
            <HeartIcon className="icon" />
            <span className="badge">5</span>
         </button>
      </>
   );
}
