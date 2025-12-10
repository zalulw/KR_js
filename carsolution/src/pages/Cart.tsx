import { useEffect, useState } from "react";
import type { Car } from "../types/Car";
import apiCLient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import { IoNuclear } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [cars, setCars] = useState<Array<Car>>([]);

  useEffect(() => {
    apiCLient
      .get("/autok")
      .then((res) => setCars(res.data))
      .catch(() => toast.error("A backend betöltése sikertelen volt!"));
  }, []);

  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (searchedIndex: number) => {
    setCart(cart.filter((_, idx) => idx !== searchedIndex));

    toast.success("Sikeresen eltávolítottad a kiválasztott autót a kosárból!");
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
        {cart.map((value, index) => {
          const car = cars.find((c) => c.id == value);
          return (
            <tr>
              <td>{car?.marka}</td>
              <td>{car?.modell} </td>
              <td>{car?.ar}</td>
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
  );
};

export default Cart;
