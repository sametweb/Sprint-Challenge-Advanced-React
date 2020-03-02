import React, { useEffect } from "react";
import Player from "./Player";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Players = ({ players, updateFavPlayers }) => {
  const [favPlayers, setFavPlayers] = useLocalStorage("favPlayers");

  useEffect(() => updateFavPlayers(favPlayers), [favPlayers]);

  const handleFavButton = player => {
    setFavPlayers([...favPlayers, player]);
  };
  console.log(favPlayers);
  return (
    <div style={{ width: 600, margin: "0 auto" }}>
      <div className="player-card header">
        <span>Name</span>
        <span>Country</span>
        <span>Searches</span>
        <span>Favorite</span>
      </div>
      {players.map(player => (
        <Player
          key={player.id}
          player={player}
          handleFavButton={handleFavButton}
          fav={favPlayers.some(fav => fav.name === player.name)}
        />
      ))}
    </div>
  );
};

export default Players;
