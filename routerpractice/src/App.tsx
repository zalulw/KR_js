import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <div>
                <p>
                    <Link to="/hofok">Hőmérséklet átváltó</Link>
                </p>
                <p>
                    <Link to="/szamgep">Számológép</Link>
                </p>
                <p>
                    <Link to="/bmi">BMI kalkulátor</Link>
                </p>
                <p>
                    <Link to="/penzvalto">Pénzváltó (non functional)</Link>
                </p>
            </div>
        </>
    );
}
export default App;
