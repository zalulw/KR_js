import { useState } from "react";
import "../styles/pizza.css";
import apiClient from "../api/apiClient";
import type { Pizza } from "../types/Pizza";

const NewPizza = () => {
  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  const addPizza = () => {
    const newPizza: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };

    if (newPizza.ar < 1) {
      alert("Az ár nem lehet kisebb, mint 1!");
      return;
    } else {
      apiClient
        .post<Pizza>("/pizzak", newPizza)
        .then((response) => {
          switch (response.status) {
            case 201:
              alert("Sikeres hozzáadás!");
              break;
            case 400:
              alert("bad request");
              break;
            default:
              alert("Valami hiba történt!");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Hiba történt a pizza hozzáadásakor.");
        });
    }
  };

  return (
    <>
      <div>
        <h1>Pizza szeerkeztese</h1>
        <table>
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
                value={ar}
                min={0}
                onChange={(e) => setAr(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>Leírás:</td>
            <td>
              <input
                type="text"
                value={leiras}
                onChange={(e) => setLeiras(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>ImageUrl</td>
            <td>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <button onClick={addPizza}>Hozzáadás</button>
      </div>
    </>
  );
};

export default NewPizza;
