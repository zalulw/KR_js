import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const BmiApp = () => {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number>(0);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        if (height > 0 && weight > 0) {
            const heightInMeters = height / 100;
            const calculatedBmi = weight / Math.pow(heightInMeters, 2);
            setBmi(calculatedBmi);
            if (calculatedBmi <= 15.9) {
                setMessage('Very severely underweight');
            } else if (calculatedBmi >= 16 && calculatedBmi <= 16.9) {
                setMessage('Severely underweight');
            } else if (calculatedBmi >= 17 && calculatedBmi <= 18.4) {
                setMessage('Underweight');
            } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
                setMessage('Normal (healthy weight)');
            } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
                setMessage('Overweight');
            } else if (calculatedBmi >= 30 && calculatedBmi <= 34.9) {
                setMessage('Obese Class I (Moderately obese)');
            } else if (calculatedBmi >= 35 && calculatedBmi <= 39.9) {
                setMessage('Obese Class II (Severely obese)');
            } else if (calculatedBmi >= 40) {
                setMessage('Obese Class III (Very severely obese)');
            } else {
                setMessage('');
            }
        } else {
            setBmi(0);
            setMessage('');
        }
    }, [weight, height]);

    return (
        <>
            <h1>BMI-calculator</h1>
            <label htmlFor="weight">Weight (kg): </label>
            <input type="number" id="weight" onChange={(e) => setWeight(Number(e.target.value))} />
            <br />

            <label htmlFor="height">Height (cm): </label>
            <input type="number" id="height" onChange={(e) => setHeight(Number(e.target.value))} />

            <h2>{message}</h2>
            <h2>BMI: {bmi.toFixed(2)}</h2>
        </>
    );
};

export default BmiApp;
