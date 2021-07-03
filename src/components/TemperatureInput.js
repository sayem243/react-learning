import React from 'react';

const ScaleNames = {
    c: 'clecius',
    f: 'fahrenheit',
};

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter Temperature in {ScaleNames[scale]} :</legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}

export default TemperatureInput;
