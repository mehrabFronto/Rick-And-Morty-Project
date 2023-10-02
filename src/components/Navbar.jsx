import { HeartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
   return (
      <nav className="navbar">
         <Logo />
         <Search />
         <SearchResult />
         <Favorites />
      </nav>
   );
};

export default Navbar;

const Logo = () => {
   return <div className="navbar__logo">LOGO 😍</div>;
};

function Search() {
   return (
      <input
         type="text"
         className="text-field"
         placeholder="search..."
      />
   );
}

function SearchResult() {
   return <div className="navbar__result">Found 5 characters</div>;
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
