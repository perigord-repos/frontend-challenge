import React from "react";
import { useGame } from "./GameContext";

function GridSelector() {
  const { setGridSize } = useGame();

  return (
      <select onChange={(e) => setGridSize(Number(e.target.value))}>
          <option value="3">3x3</option>
          <option value="6">6x6</option>
          <option value="9">9x9</option>
      </select>
  );
}

export default GridSelector;

