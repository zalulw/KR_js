import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import "bootstrap/dist/css/bootstrap.min.css";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllPizza = () => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);
  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzas(response.data))
      .catch(() => toast.error("Hiba történt a pizzák betöltésekor"));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const generateCards = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button
              onClick={() => {
                setCart([...cart, Number(p.id)]);
                toast.success("Sikeres hozzáadás!");
              }}
              variant="primary"
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Container>
        <Row xs={"auto"} md={"auto"} className="g-4">
          {pizzas.map((i) => generateCards(i))}
        </Row>
      </Container>
    </>
  );
};

export default AllPizza;
