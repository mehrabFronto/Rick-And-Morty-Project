type CharactersListProps = {
   characters: CharacterType[],
   isLoading: boolean,
   selectedId: number | null,
   selectCharacterHandler: (id: number) => void,
}

const CharactersList = ({
   characters,
   isLoading,
   selectedId,
   selectCharacterHandler,
}: CharactersListProps) => {
   if (isLoading) return <Loader />;

   return (
      <div className="characters-list">
         {characters.map((item) => (
            <Character
               key={item.id}
               item={item}>
               <button
                  className="icon red"
                  onClick={() => selectCharacterHandler(item.id)}>
                  {selectedId === item.id ? <EyeSlashIcon /> : <EyeIcon />}
               </button>
            </Character>
         ))}
      </div>
   );
};

export default CharactersList;

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";
import { CharacterType } from "../types/CharacterType";
import { ReactNode } from "react";

type CharacterProps = {
   children: ReactNode;
   item: {
      image:string;
      name: string;
      gender: string;
      status: string;
      species: string
   }
}

export function Character({ item, children }: CharacterProps) {
   return (
      <div className="list__item">
         <img
            src={item.image}
            alt={item.name}
         />
         <CharacterName item={item} />
         <CharacterInfo item={item} />
         {children}
      </div>
   );
}

function CharacterName({ item }: { item: { gender: string; name: string } }) {
   return (
      <h3 className="name">
         <span>{item.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦳"}</span>
         <span> {item.name}</span>
      </h3>
   );
}

function CharacterInfo({ item }: { item: { status: string; species: string } }) {
   return (
      <div className="list-item__info info">
         <span
            className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
         <span> {item.status} </span>
         <span> - {item.species}</span>
      </div>
   );
}
