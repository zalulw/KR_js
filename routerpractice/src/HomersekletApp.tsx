import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomersekletApp = () => {
    const [celsius, setCelsius] = useState<number>(0);
    const [fahrenheit, setFahrenheit] = useState<number>(32);
    const [kelvin, setKelvin] = useState<number>(273.15);

    useEffect(() => {
        setFahrenheit((celsius * 9) / 5 + 32);
        setKelvin(celsius + 273.15);
    }, [celsius]);

    return (
        <>
            <h1>Hőmérséklet átváltó</h1>
            <p>Adja meg a Celsius hőmérsékletet</p>
            <input type="number" id="input" onChange={(e) => setCelsius(Number(e.target.value))} />
            <h2>
                {celsius}°C = {fahrenheit.toFixed(2)}°F <br />
                {celsius}°C = {kelvin.toFixed(2)}°K
            </h2>
        </>
    );
};

export default HomersekletApp;
