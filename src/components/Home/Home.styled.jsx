import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: ${(props) => props.gridsize <= 20 ? 'baseline' : 'space-between'};
    flex-wrap: wrap;
    gap: 30px;
    padding: 30px;
    max-width: 100%;
`;

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
