import React, { useEffect, useState } from 'react';
import { getModesAPI } from '../../services/API';
import { Form, Select, Option, StartButton } from './Modes.styled';

export const Modes = ({ onSelectMode }) => {

  const [modes, setModes] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getModesAPI();
        setModes(data);
      } catch (error) {
        console.error('Error in Modes component:', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedMode = modes.find((mode) => mode.name === selectedOption);
    onSelectMode(selectedMode);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Select value={selectedOption} onChange={handleSelectChange}>
        <Option value="" disabled>Pick mode</Option>
        {modes.map((mode) => (
          <Option key={mode.name} value={mode.name}>
            {mode.name}
          </Option>
        ))}
      </Select>
      <StartButton type="submit">Start</StartButton>
    </Form>
  );
};
