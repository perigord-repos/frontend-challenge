import React, { ChangeEvent } from "react";
import { useGame } from "./GameContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function GridSelector() {
  const { setGridSize, resetGame } = useGame();

  const handleGridChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGridSize(Number(e.target.value));  // Set grid size
    resetGame();  // Reset the game after setting grid size
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5 offset-md-5"> {/* Center the column on medium screens and up */}
          <div className="d-flex justify-content-center"> {/* Use flexbox to center the input group */}
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="gridSelector">Grid Size</label>
              </div>
              <select 
                className="custom-select" 
                id="gridSelector" 
                onChange={handleGridChange}
              >
                <option value="3">3x3</option>
                <option value="6">6x6</option>
                <option value="9">9x9</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridSelector;
