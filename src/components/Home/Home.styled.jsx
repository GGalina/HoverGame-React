import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: ${(props) => props.gridsize <= 20 ? 'baseline' : 'space-between'};
    flex-wrap: wrap;
    gap: 20px;
    padding: 30px;
`;

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
