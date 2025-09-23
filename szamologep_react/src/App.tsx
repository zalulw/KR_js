import React, { useState } from 'react';

const App = () => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [result, setResult] = useState<number | string>(0);
    const [operation, setOperation] = useState<string>('addition');

    const onButtonClick = () => {
        let calcResult: number | string;

        if (operation === 'addition') {
            calcResult = num1 + num2;
        } else if (operation === 'subtraction') {
            calcResult = num1 - num2;
        } else if (operation === 'division') {
            if (num2 === 0) {
                calcResult = 'Error! You cannot divide by zero.';
            } else {
                calcResult = num1 / num2;
            }
        } else if (operation === 'multiplication') {
            calcResult = num1 * num2;
        } else {
            calcResult = 0;
        }

        setResult(calcResult);
    };

    return (
        <>
            <h1>Calculator</h1>
            <input
                type="number"
                placeholder="0"
                onChange={(e) => setNum1(Number(e.target.value))}
            />
            <select
                name="operation"
                id="operation"
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
            >
                <option value="addition">+</option>
                <option value="subtraction">-</option>
                <option value="division">/</option>
                <option value="multiplication">*</option>
            </select>
            <input
                type="number"
                placeholder="0"
                onChange={(e) => setNum2(Number(e.target.value))}
            />
            <button onClick={onButtonClick}>Calculate</button>
            {result !== null && <p>Result: {result}</p>}
        </>
    );
};

export default App;
