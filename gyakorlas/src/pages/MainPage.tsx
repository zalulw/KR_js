import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import TopNavbar from "../components/NavbarComponent";

const MainPage = () => {
  const navigate = useNavigate();

  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);
  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzas(response.data))
      .catch(() => toast.error("Hiba a betöltéskor"));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageURL}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button
              onClick={() => navigate(`/pizza/${p.id}`)}
              variant="success"
            >
              Megtekintés
            </Button>
            <Button
              onClick={() => {
                setCart([...cart, Number(p.id)]);
                toast.success("Sikeresen kosárba tetted a terméket!");
              }}
              variant="success"
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <TopNavbar />

      <Row xs={"auto"} md={"auto"} className="g-4">
        {pizzas.map((i) => generateCard(i))}
      </Row>
    </Container>
  );
};

export default MainPage;
