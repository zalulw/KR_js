import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PenzvaltoApp = () => {
    return (
        <>
            <label htmlFor="penz">Pénzősszeg(HUF)</label>
            <input type="number" id="penz" />
        </>
    );
};

export default PenzvaltoApp;
