import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { Link } from "react-router-dom";

function All() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response: { data: any }) => setPizzas(response.data))
      .catch((reason) => alert(reason));
  }, []);

  return (
    <>
      {pizzas.map((p) => (
        <p>
          <h1>{p.nev}</h1>
          <Link to={`/pizzak/${p.id}`}>
            <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width="200" />
          </Link>
          <br />
          <h2>{p.leiras}</h2>
          <h2>{p.ar}Ft</h2>
        </p>
      ))}
    </>
  );
}

export default All;
