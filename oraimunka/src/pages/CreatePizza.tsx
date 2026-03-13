import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import TopNav from "../components/TopNav";

const CreatePizza = () => {
  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  const submit = () => {
    apiClient
      .post("/pizzak", pizza)
      .then(() => toast.success("Sikeres létrehozás"))
      .catch(() => toast.error("Sikertelen hozzáadás!"));
  };

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <TopNav />

      <h1>Név:</h1>
      <input
        type="text"
        value={pizza.nev}
        onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
      />

      <h1>Leírás</h1>
      <input
        type="text"
        value={pizza.leiras}
        onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
      />

      <h1>Ár</h1>
      <input
        type="number"
        value={pizza.ar}
        onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
      />

      <h1>Kép URL</h1>
      <input
        type="text"
        value={pizza.imageUrl}
        onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
      />

      <br />
      <button onClick={submit}>Hozzáadás</button>
    </Container>
  );
};

export default CreatePizza;
