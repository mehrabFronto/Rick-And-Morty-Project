import { ArrowUpCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { CharacterType } from "../types/CharacterType";


type CharacterDetailProps = {
   selectedId: number | null,
   onAddToFavorite: (character: CharacterType) => void,
   isAddToFavorite: boolean,
   onCloseSelectedCharacter: () => void,
}


type EpisodesType = {
   air_date: string;
   characters: string[];
   created: string;
   episode: string;
   id: number;
   name: string;
   url: string;
}

const CharacterDetail = ({
   selectedId,
   onAddToFavorite,
   isAddToFavorite,
   onCloseSelectedCharacter,
}: CharacterDetailProps) => {
   const [character, setCharacter] = useState<CharacterType | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [episodes, setEpisodes] = useState<EpisodesType[] | []>([]);

   useEffect(() => {
      async function fetchData() {
         try {
            setIsLoading(true);
            const { data } = await axios.get(
               `https://rickandmortyapi.com/api/character/${selectedId}`,
            );
            setCharacter(data);

            const episodesId: number[] = data.episode.map((e: string) => e.split("/").at(-1)); // [1, 2, 3]
            const { data: episodeData } = await axios.get(
               `https://rickandmortyapi.com/api/episode/${episodesId}`,
            );
            setEpisodes([episodeData].flat().slice(0, 6));
         } catch (error) {
            toast.error(error.response.data.error);
         } finally {
            setIsLoading(false);
         }
      }

      if (selectedId) fetchData();
   }, [selectedId]);

   if (isLoading) return <Loader />;

   if (!selectedId || !character)
      return (
         <div
            className="character-detail__container"
            style={{ flex: 1, color: "var(--slate-300)" }}>
            Please select a character.
         </div>
      );

   return (
      <div
         className="character-detail__container"
         style={{ flex: 1 }}>
         <CharacterSubInfo
            character={character}
            onAddToFavorite={onAddToFavorite}
            isAddToFavorite={isAddToFavorite}
            onCloseSelectedCharacter={onCloseSelectedCharacter}
         />
         <EpisodeList episodes={episodes} />
      </div>
   );
};

export default CharacterDetail;

type CharacterSubInfoProps = {
   character: CharacterType;
   onAddToFavorite: (character: CharacterType) => void,
   isAddToFavorite: boolean,
   onCloseSelectedCharacter: () => void,
}

export function CharacterSubInfo({
   character,
   onAddToFavorite,
   isAddToFavorite,
   onCloseSelectedCharacter,
}: CharacterSubInfoProps) {
   return (
      <div className="character-detail">
         <img
            src={character.image}
            alt={character.name}
            className="character-detail__img"
         />
         <div
            className="character-detail__info"
            style={{ width: "100%" }}>
            <h3
               className="name"
               style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
               }}>
               <div>
                  <span>{character.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦳"}</span>
                  <span>&nbsp;{character.name}</span>
               </div>
               <button onClick={onCloseSelectedCharacter}>
                  <XCircleIcon
                     className="icon close"
                     style={{ color: "var(--rose-500)" }}
                  />
                  {/*  */}
               </button>
            </h3>
            <div className="info">
               <span
                  className={`status ${
                     character.status === "Dead" ? "red" : ""
                  }`}></span>
               <span>&nbsp;{character.status}</span>
               <span> - &nbsp;{character.species}</span>
            </div>
            <div className="location">
               <p>Last known location:</p>
               <p>{character.location.name}</p>
            </div>
            <div className="actions">
               {isAddToFavorite ? (
                  <p>Already Added To Favorites ✅</p>
               ) : (
                  <button
                     onClick={() => onAddToFavorite(character)}
                     className="btn btn--primary">
                     Add to Favorite
                  </button>
               )}
            </div>
         </div>
      </div>
   );
}

export function EpisodeList({ episodes }: { episodes: EpisodesType[] | [] }) {
   // true => earliest => asc
   const [sortBy, setSortBy] = useState(true);

   let sortedEpisodes;

   if (sortBy) {
      sortedEpisodes = [...episodes].sort(
         (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime(),
      );
   } else {
      sortedEpisodes = [...episodes].sort(
         (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
      );
   }

   return (
      <div className="character-episodes">
         <div className="title">
            <h2>List of Episodes:</h2>
            <button onClick={() => setSortBy((prev) => !prev)}>
               <ArrowUpCircleIcon
                  className="icon"
                  style={{ rotate: sortBy ? "0deg" : "180deg" }}
               />
               {/*  */}
            </button>
         </div>
         <ul>
            {sortedEpisodes.map((item, index) => (
               <li key={item.id}>
                  <div>
                     {String(index + 1).padStart(2, "0")} - {item.episode} :
                     <strong>{item.name}</strong>
                  </div>
                  <div className="badge badge--secondary">{item.air_date}</div>
               </li>
            ))}
         </ul>
      </div>
   );
}
