import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";
import { CharacterType } from "../types/CharacterType";
import { Character } from "./CharactersList";
import Modal from "./Modal";

const NavBar = ({ children }: { children: ReactNode }) => {
   return (
      <nav className="navbar">
         <Logo />
         {children}
      </nav>
   );
};

export default NavBar;

const Logo = () => {
   return <div className="navbar__logo">LOGO 😍</div>;
};

type SearchProps = {
   query: string; 
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Search({ query, onChange }: SearchProps) {
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

export function SearchResult({ numOfResult }: { numOfResult: number }) {
   return <div className="navbar__result">Found {numOfResult} characters</div>;
}

type FavoritesProps = {
   numOfFavorites: number,
   favorites: CharacterType[],
   onDeleteFromFavorites: (id: number) => void,
}

export function Favorites({
   numOfFavorites,
   favorites,
   onDeleteFromFavorites,
}: FavoritesProps){
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
                        {/*  */}
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
