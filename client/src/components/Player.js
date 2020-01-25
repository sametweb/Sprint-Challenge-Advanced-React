import React from "react";

const Player = ({ player, handleFavButton, fav }) => {
  return (
    <div className="player-card" data-testid="player">
      <span>{player.name}</span>
      <span>{player.country}</span>
      <span>{player.searches}</span>
      <span
        data-testid="favButton"
        onClick={() => handleFavButton(player)}
        className={fav ? "red" : ""}
      >
        ❤
      </span>
    </div>
  );
};

export default Player;
