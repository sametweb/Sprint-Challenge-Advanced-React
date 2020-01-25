import React from "react";
import App from "./App";
import Player from "./components/Player";
import Players from "./components/Players";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const testData = [
  { name: "Alex", country: "US", searches: 100, id: 0 },
  { name: "Megan", country: "United States", searches: 99, id: 1 },
  { name: "Marta", country: "Brazil", searches: 18, id: 2 }
];

test("Player list header labels render", () => {
  const players = rtl.render(
    <Players
      players={testData}
      updateFavPlayers={() =>
        function(fav) {
          return fav;
        }
      }
    />
  );
  const name = players.getByText(/name/i);
  const country = players.getByText(/country/i);
  const searches = players.getByText(/searches/i);
  const favorite = players.getByText(/favorite/i);

  expect(name).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(searches).toBeInTheDocument();
  expect(favorite).toBeInTheDocument();
});

test("Players component renders props data", () => {
  const players = rtl.render(
    <Players
      players={testData}
      updateFavPlayers={() =>
        function(fav) {
          return fav;
        }
      }
    />
  );

  const name = players.getByText(/megan/i);
  const country = players.getByText(/united states/i);
  const searches = players.getByText(/18/i);

  expect(name).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(searches).toBeInTheDocument();
});

test("Player component renders props data", () => {
  const player = rtl.render(
    <Player player={{ name: "Sam", country: "TR", searches: 16, id: 1 }} />
  );

  const name = player.getByText(/sam/i);
  const country = player.getByText(/tr/i);
  const searches = player.getByText("16");

  expect(name).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(searches).toBeInTheDocument();
});
