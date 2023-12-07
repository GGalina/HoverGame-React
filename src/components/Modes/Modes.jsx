import React, { useEffect, useState } from 'react';
import { getModesAPI } from '../../services/API';
import s from './Modes.module.scss';

export const Modes = ({ onSelectMode }) => {
    const [modes, setModes] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        getModesAPI()
            .then(data => setModes(data))
            .catch(error => console.error('Error fetching modes:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedMode = modes.find(mode => mode.name === selectedOption);
        onSelectMode(selectedMode);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <select className={s.selectedOption} value={selectedOption} onChange={handleSelectChange}>
                <option value="" disabled>Pick mode</option>
            {modes.map(mode => (
                <option key={mode.name} value={mode.name}>
                    {mode.name}
                </option>
            ))}
            </select>
            <button className={s.start} type="submit">Start</button>
        </form>
    );
};
