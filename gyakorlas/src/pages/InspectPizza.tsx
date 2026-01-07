import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";

const InspectPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch((err) => toast.warn(err));
  }, [id]);

  const deletePizza = () => {
    apiClient.delete(`/pizzak/${id}`).then(() => {
      toast.success("Sikeres törlés");
      navigate("/");
    });
  };

  const editPizza = () => {
    navigate(`/edit-pizza/${id}`);
  };

  return (
    <>
      {pizza ? (
        <>
          <h1>{pizza.nev}</h1>
          <h2>{pizza.leiras}</h2>
          <img width={200} src={`${baseURL}/kepek/${pizza.imageURL}`} />
          <br />
          <button onClick={editPizza}>Szerkesztés</button>
          <button onClick={deletePizza}>Törlés</button>
        </>
      ) : (
        <>A pizza nem található</>
      )}
    </>
  );
};

export default InspectPizza;
