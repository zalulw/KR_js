import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { IoNuclear } from "react-icons/io5";

const Cart = () => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzas(res.data))
      .catch(() => toast.error("Hiba történt a betöltéskor"));
  }, []);

  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (searchedIndex: number) => {
    setCart(cart.filter((_, index) => index != searchedIndex));

    toast.success("Törölve a kosárból");
  };

  return (
    <>
      {cart.length > 0 ? (
        <Table striped bordered>
          <thead>
            <th>Név</th>
            <th>Ár</th>
            <th>Törlés</th>
          </thead>

          <tbody>
            {" "}
            {cart.map((value, index) => {
              const pizza = pizzas.find((p) => p.id == value);
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
          <Button onClick={() => setCart([])} variant="warning">
            <IoNuclear />
          </Button>
        </Table>
      ) : (
        <h2>A kosár üres</h2>
      )}
      )
    </>
  );
};

export default Cart;
