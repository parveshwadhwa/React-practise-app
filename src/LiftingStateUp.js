import React from 'react';

class LiftingStateup extends React.Component 
{
    render()
    {
        return(
        <div>
            <Calculator />
        </div>
        );
    }
}

function BoilingVerdict(props) 
{
    if(props.celsius >= 100)
    {
        return <h2>The Water Would boil.</h2>;
    }
    return <h2>The Water Would Not Boil</h2>;
}

class Calculator extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature});
    }
    render()
    {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
                <div>
    <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />

    <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>

    <BoilingVerdict celsius={parseFloat(celsius)} />
                </div>
        );
    }
}

function toCelsius(fahrenheit)
{
    return (fahrenheit - 32)*5/9;
}

function toFahrenheit(celsius)
{
    return (celsius * 9/5) +32;
}

function tryConvert(temperature, convert)
{
    const input = parseFloat(temperature);
    if(Number.isNaN(input))
    {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output*1000) / 1000;
    return rounded.toString();
}

const scalenames = {
     c: 'Celsius',
     f: 'Fahrenheit'
};

class TemperatureInput extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {temperature: ''};
    }

    handleChange = (e) => {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render()
    {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>
                    Enter Temperature in {scalenames[scale]}
                </legend>
                <input type="text" value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}
export default LiftingStateup;