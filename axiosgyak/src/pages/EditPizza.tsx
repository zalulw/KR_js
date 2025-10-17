import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/pizza.css";
import apiClient from "../api/apiClient";
import type { Pizza } from "../types/Pizza";

const EditPizza = () => {
  const { id } = useParams();

  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => {
        setNev(response.data.nev ?? "");
        setLeiras(response.data.leiras ?? "");
        setAr(Number(response.data.ar ?? 0));
        setImageUrl(response.data.imageUrl ?? "");
      })
      .catch((result) => console.error(result));
  }, [id]);

  const editPizza = () => {
    const newPizza: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };

    apiClient
      .put<Pizza>(`/pizzak/${id}`, newPizza)
      .then((response) => {
        setNev(response.data.nev ?? "");
        setLeiras(response.data.leiras ?? "");
        setAr(Number(response.data.ar ?? 0));
        setImageUrl(response.data.imageUrl ?? "");
      })
      .catch((result) => console.error(result));
  };

  return (
    <>
      <div>
        <h1>Pizza szerkesztése</h1>
        <table>
          <tbody>
            <tr>
              <td>Név</td>
              <td>
                <input
                  type="text"
                  value={nev}
                  onChange={(e) => setNev(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Ár</td>
              <td>
                <input
                  type="number"
                  min={0}
                  value={ar}
                  onChange={(e) => setAr(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Leírás:</td>
              <td>
                <input
                  value={leiras}
                  type="text"
                  onChange={(e) => setLeiras(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>ImageUrl</td>
              <td>
                <input
                  value={imageUrl}
                  type="text"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={editPizza}>Frissítés</button>
      </div>
    </>
  );
};

export default EditPizza;
