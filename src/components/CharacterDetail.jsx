import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

const CharacterDetail = ({ selectedId, onAddToFavorite, isAddToFavorite }) => {
   const [character, setCharacter] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [episodes, setEpisodes] = useState([]);

   useEffect(() => {
      async function fetchData() {
         try {
            setIsLoading(true);
            const { data } = await axios.get(
               `https://rickandmortyapi.com/api/character/${selectedId}`,
            );
            setCharacter(data);

            const episodesId = data.episode.map((e) => e.split("/").at(-1)); // [1, 2, 3]
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
         />
         <EpisodeList episodes={episodes} />
      </div>
   );
};

export default CharacterDetail;

export function CharacterSubInfo({
   character,
   onAddToFavorite,
   isAddToFavorite,
}) {
   return (
      <div className="character-detail">
         <img
            src={character.image}
            alt={character.name}
            className="character-detail__img"
         />
         <div className="character-detail__info">
            <h3 className="name">
               <span>{character.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦳"}</span>
               <span>&nbsp;{character.name}</span>
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

export function EpisodeList({ episodes }) {
   return (
      <div className="character-episodes">
         <div className="title">
            <h2>List of Episodes:</h2>
            <button>
               <ArrowUpCircleIcon className="icon" />
            </button>
         </div>
         <ul>
            {episodes.map((item, index) => (
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
