import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: 150px;
  padding: 5px;
  cursor: pointer;
`;

export const Option = styled.option``; 

export const StartButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  background-color: #0075D7;
  border: 1px solid #0075D7;
  padding: 5px 10px;
  border-radius: 5px;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
