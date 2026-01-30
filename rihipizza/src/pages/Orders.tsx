import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Order } from "../types/Order";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Container, Row } from "react-bootstrap";

const Orders = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    apiClient
      .get("/rendelesek")
      .then((res) => setOrders(res.data))
      .catch(() => toast.error("Hiba a betöltéskor"));
  }, []);

  return (
    <Container>
      <Row xs={"auto"} md={"auto"} className="g-4">
        {orders.map((i) => (
          <h1>
            {i.pizzaId} - {i.mennyiseg}
          </h1>
        ))}
      </Row>
    </Container>
  );
};

export default Orders;
