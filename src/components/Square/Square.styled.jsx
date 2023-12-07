import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridsize}, 1fr);
  width: ${(props) => props.gridsize <= 20 ? props.gridsize * 31 : props.gridsize * 15}px;
`;

export const InnerSquare = styled.div`
  width: ${(props) => (parseInt(props.gridsize, 10) <= 20 ? '30' : '15')}px;
  height: ${(props) => (parseInt(props.gridsize, 10) <= 20 ? '30' : '15')}px;
  border: 1px solid black;
  text-align: center;
  margin: 0;
  cursor: pointer;

  &.selected {
    background-color: #05A8F5;
  }

  &.notSelected {
    background-color: #FFFFFF;
  }
`;

export const Row = styled.div``;