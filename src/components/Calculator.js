import React from 'react';
import { converter, toCelsius, toFahrenheit } from '../lib/Converter';
import LifitingState from './LifitingState';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celcius = scale === 'f' ? converter(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? converter(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celcius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <LifitingState celsius={parseFloat(temperature)} />
            </div>
        );
    }
}

export default Calculator;
