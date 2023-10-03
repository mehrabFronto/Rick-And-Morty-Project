import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "../components/Modal";
import { Character } from "./CharactersList";

const Navbar = ({ children }) => {
   return (
      <nav className="navbar">
         <Logo />
         {children}
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

export function Favorites({
   numOfFavorites,
   favorites,
   onDeleteFromFavorites,
}) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <Modal
            onOpen={setIsOpen}
            open={isOpen}
            title="List of Favorites">
            {favorites.length === 0 ? (
               <p
                  style={{
                     width: "100%",
                     textAlign: "center",
                     color: "white",
                  }}>
                  Favorites List is Empty 😪
               </p>
            ) : (
               favorites.map((item) => (
                  <Character
                     key={item.id}
                     item={item}>
                     <button
                        className="icon red"
                        onClick={() => onDeleteFromFavorites(item.id)}>
                        <TrashIcon />
                     </button>
                  </Character>
               ))
            )}
         </Modal>

         <button
            className="heart"
            onClick={() => setIsOpen(true)}>
            <HeartIcon className="icon" />
            <span className="badge">{numOfFavorites}</span>
         </button>
      </>
   );
}
