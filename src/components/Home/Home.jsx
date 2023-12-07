import React, { useState } from 'react';
import { Square } from '../Square/Square';
import { Modes } from '../Modes/Modes';
import { Info } from '../Info/Info';
import { MainContainer, GridContainer } from './Home.styled';

export const Home = () => {
  const [hoveredSquares, setHoveredSquares] = useState(['1-2', '2-2', '3-2', '3-3']);
  const [gridSize, setGridSize] = useState(5);
  const [squareStates, setSquareStates] = useState({}); 

  const handleSelectMode = (mode) => {
    setHoveredSquares([]);
    setGridSize(mode?.field);
    setSquareStates({}); 
  };

  const handleSquareHover = (square) => {
    setHoveredSquares((prevHoveredSquares) => {
      const updatedHoveredSquares = [...prevHoveredSquares];
      const squareIndex = updatedHoveredSquares.indexOf(square);

      if (squareIndex === -1) {
        updatedHoveredSquares.push(square);
      } else {
        updatedHoveredSquares.splice(squareIndex, 1);
      }
      setSquareStates((prevSquareStates) => ({
        ...prevSquareStates,
        [square]: updatedHoveredSquares.includes(square),
      }));
      return updatedHoveredSquares;
    });
  };

  return (
  <MainContainer>
    <GridContainer>
      <Modes onSelectMode={handleSelectMode} />
      <Square onHover={handleSquareHover} gridSize={gridSize} hoveredSquares={hoveredSquares} squareStates={squareStates} />
    </GridContainer>
        <Info hoveredSquares={hoveredSquares}/>
  </MainContainer>
  );
};
