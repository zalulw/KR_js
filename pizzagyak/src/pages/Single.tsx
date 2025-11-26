import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";

function PizzaDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const statePizza = (location.state as { pizza?: Pizza } | null)?.pizza;
  const [pizza, setPizza] = useState<Pizza | null>(statePizza ?? null);

  useEffect(() => {
    if (!pizza && id) {
      apiClient
        .get(`/pizzak/${id}`)
        .then((res: { data: any }) => setPizza(res.data))
        .catch((err) => alert(err));
    }
  }, [id, pizza]);

  if (!pizza) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pizza.nev}</h1>
      <img
        src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
        alt={pizza.nev}
        width="50%"
      />
      <h2>{pizza.leiras}</h2>
      <h2>{pizza.ar} Ft</h2>
    </div>
  );
}

export default PizzaDetail;
