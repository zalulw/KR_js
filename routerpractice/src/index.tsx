import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Szamologep from './Szamologep';
import BmiApp from './Bmi';
import HomersekletApp from './HomersekletApp';
import PenzvaltoApp from './PenzvaltoApp';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/szamgep" element={<Szamologep />} />
                <Route path="/bmi" element={<BmiApp />} />
                <Route path="hofok" element={<HomersekletApp />} />
                <Route path="penzvalto" element={<PenzvaltoApp />} />

                <Route path="*" element={<h1>404, az oldal nem található</h1>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
