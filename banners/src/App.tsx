import apiClient, { BACKEND_URL } from './api/apiClient';
import './App.css'
import type { Pizza } from './types/Pizza';
import { useState, useEffect } from 'react';


function App() {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  
  useEffect(() => {
    apiClient.get("/pizzak").then(response => setPizzak(response.data)).catch((reason) => alert(reason));
  }, [])

  return (
    <>
      {pizzak.map((p) => {
        <div>
          <h2>{p.nev}</h2>
          <img src={BACKEND_URL + "/kepek/" + p.imageUrl} alt={p.nev} width="200" />
        </div>
      })}
    </>
  )
}

export default App
