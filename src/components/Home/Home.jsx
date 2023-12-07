import React, { useState } from 'react';
import { Square } from '../Square/Square';
import { Modes } from '../Modes/Modes';

export const Home = () => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [hoveredSquares, setHoveredSquares] = useState([]);

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
    setHoveredSquares([]); // Reset the list of hovered squares when a mode is selected
  };

  const handleSquareHover = (square) => {
    setHoveredSquares((prevHoveredSquares) => {
      const updatedHoveredSquares = [...prevHoveredSquares];

      const squareIndex = updatedHoveredSquares.indexOf(square);

      if (squareIndex === -1) {
        // Square is not in the list, add it
        updatedHoveredSquares.push(square);
      } else {
        // Square is in the list, remove it
        updatedHoveredSquares.splice(squareIndex, 1);
      }

      return updatedHoveredSquares;
    });
  };

  const renderSquares = () => {
    const gridRowCount = selectedMode?.field || 5;
    const gridColumnCount = selectedMode?.field || 5;

    const squares = [];

    for (let i = 0; i < gridRowCount; i++) {
      for (let j = 0; j < gridColumnCount; j++) {
        const squareKey = `${i}-${j}`;
        const isBlue = hoveredSquares.includes(squareKey);

        squares.push(
          <Square
            key={squareKey}
            color={isBlue ? 'blue' : 'white'}
            onHover={() => handleSquareHover(squareKey)}
          />
        );
      }
    }

    return squares;
  };

  return (
    <div className="App">
      <Modes onSelectMode={handleSelectMode} />
      <div className="squares-container">{renderSquares()}</div>
    </div>
  );
};
