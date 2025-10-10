import { useState, useEffect } from "react";
import react from "react";
import { useParams } from "react-router-dom";
import type { Pizza } from "../types/pizzaType.ts";
import apiClient, { BACKEND_URL } from "../api/apiClient.ts";
import "../styles/App.css";

const PizzaSingle = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    if (!id) return;
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch((reason) => alert(reason));
  }, [id]);

  return (
    <>
      <h1>{pizza?.nev}</h1>
      <p>{pizza?.ar} Ft</p>
      <img src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`} width="200" />
      <h2>{pizza?.leiras}</h2>
    </>
  );
};

export default PizzaSingle;
