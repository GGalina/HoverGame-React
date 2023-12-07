import React from 'react';
import {
  InfoContainer,
  Header,
  HoveredSquaresList,
  HoveredSquareItem
} from './Info.styled';


export const Info = ({ hoveredSquares }) => {
  const isBlue = hoveredSquares.length > 0;

  return (
    <>
      {isBlue && (
        <InfoContainer>
          <Header>Hover squares:</Header>
          <HoveredSquaresList>
            {hoveredSquares.map((square) => {
              const [col, row] = square.split('-');
              return (
                <HoveredSquareItem key={square}>
                  Row: {row}, Col: {col}
                </HoveredSquareItem>
              );
            })}
          </HoveredSquaresList>
        </InfoContainer>
      )}
    </>
  );
};
