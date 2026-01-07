import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import { FaRegHandPointDown, FaRegHandPointLeft } from "react-icons/fa";

const Cart = () => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);
  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzas(res.data))
      .catch(() => toast.warn("Hiba a betöltéskor"));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (searchedIdx: number) => {
    setCart(cart.filter((_, idx) => idx != searchedIdx));

    toast.success("Sikeres törlés");
  };

  return (
    <Table>
      <thead>
        <th>Név</th>
        <th>Ár</th>
        <th>Törlés</th>
      </thead>
      <tbody>
        {cart.map((value, idx) => {
          const pizza = pizzas.find((p) => p.id == value);
          return (
            <tr>
              <td>{pizza?.nev}</td>
              <td>{pizza?.ar}</td>
              <td>
                <Button variant="danger" onClick={() => removeItem(idx)}>
                  <FaRegHandPointDown />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <Button onClick={() => setCart([])} variant="warning">
        <FaRegHandPointLeft />
      </Button>
    </Table>
  );
};

export default Cart;
