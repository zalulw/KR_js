import { useState, useEffect } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient.ts";
import type { Pizza } from "../types/pizzaType.ts";
import "../styles/App.css";

function App() {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzas(response.data))
      .catch((reason) => alert(reason));
  }, []);

  return (
    <>
      {pizzas.map((p) => (
        <p>
          <h1>{p.nev}</h1>
          <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width="200" />
        </p>
      ))}
    </>
  );
}

export default App;
