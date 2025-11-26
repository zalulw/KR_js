import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]") //ures "string tomb" igazi tombbe valtozik ha nincsenek itemek
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(kosar));
  }, [kosar]);

  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((_, index) => index != searchedIndex));

    toast.success("Sikeres törlés");
  };

  return (
    <Table striped bordered>
      <thead>
        <th>Név</th>
        <th>Ár</th>
        <th>Törlés</th>
      </thead>

      <tbody>
        {" "}
        {kosar.map((value, index) => {
          const pizza = pizzak.find((p) => p.id == value);
          return (
            <tr>
              <td>{pizza?.nev}</td>
              <td>{pizza?.ar}</td>
              <td>
                <Button variant="danger" onClick={() => removeItem(index)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Cart;
