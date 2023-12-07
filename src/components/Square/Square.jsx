import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { InnerSquare, Row, Container } from './Square.styled.jsx';

export const Square = ({ onHover, gridSize, hoveredSquares }) => {

    const handleInnerSquareHover = (row, col) => {
        onHover(`${row + 1}-${col + 1}`);
    };

    const renderInnerSquares = () => {
        const innerSquares = [];

        for (let i = 0; i < gridSize; i++) {
            const rowSquares = [];

            for (let j = 0; j < gridSize; j++) {
                const squareKey = `${i + 1}-${j + 1}`;
                const isBlue = hoveredSquares.includes(squareKey);
                rowSquares.push(
                    <InnerSquare
                        key={squareKey}
                        className={isBlue ? 'selected' : 'notSelected'}
                        onMouseOver={() => handleInnerSquareHover(i, j)}
                        gridsize={gridSize}
                    />
                );
            }
            innerSquares.push(<Row key={i}>{rowSquares}</Row>);
        }
        return innerSquares;
    };

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'gridsize'}>
            <Container gridsize={gridSize}>{renderInnerSquares()}</Container>
        </StyleSheetManager>
    );
};
