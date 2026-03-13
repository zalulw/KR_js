import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import apiClient from "../api/apiClient";
import { Button, Container, Table } from "react-bootstrap";
import TopNav from "../components/TopNav";

const Cart = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [cart, setCart] = useState<number[]>(
    JSON.parse(localStorage.getItem("cart") ?? "[]"),
  );

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      toast.error("Hiba a kosár betöltésekor");
    }
  }, [cart]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzas(res.data))
      .catch(() => toast.error("Hiba a pizzák lekérésekor"));
  }, []);

  const removeItem = (pizzaId: number) => {
    const index = cart.lastIndexOf(pizzaId);
    if (index > -1) {
      setCart(cart.filter((_, i) => i !== index));
      toast.success("Sikeres törlés");
    }
  };

  // Group items by pizza ID and count them
  const cartItems = cart.reduce(
    (acc, pizzaId) => {
      const existing = acc.find((item) => item.id === pizzaId);
      if (existing) {
        existing.count += 1;
      } else {
        acc.push({ id: pizzaId, count: 1 });
      }
      return acc;
    },
    [] as Array<{ id: number; count: number }>,
  );

  // Calculate total price using reduce
  const totalPrice = cartItems.reduce((sum, item) => {
    const pizza = pizzas.find((p) => p.id == item.id);
    return sum + (pizza?.ar || 0) * item.count;
  }, 0);

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TopNav />

      <Table striped bordered>
        <thead>
          <th>Név</th>
          <th>Darab</th>
          <th>Ár</th>
          <th>Törlés</th>
        </thead>

        <tbody>
          {cartItems.map((item) => {
            const pizza = pizzas.find((p) => p.id == item.id);
            return (
              <tr key={item.id}>
                <td>{pizza?.nev}</td>
                <td>{item.count}</td>
                <td>{(pizza?.ar || 0) * item.count} Ft</td>
                <td>
                  <Button variant="danger" onClick={() => removeItem(item.id)}>
                    Törlés
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <strong>Összesen:</strong>
            </td>
            <td>
              <strong>{totalPrice} Ft</strong>
            </td>
            <td></td>
          </tr>
        </tfoot>
        <Button onClick={() => setCart([])} variant="warning">
          Kosár ürítése
        </Button>
      </Table>
    </Container>
  );
};

export default Cart;
