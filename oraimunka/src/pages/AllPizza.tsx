import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BASEURL } from "../api/apiClient";
import { toast } from "react-toastify";
import Col from "react-bootstrap/esm/Col";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";

const AllPizza = () => {
  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [cart, setCart] = useState<number[]>(
    JSON.parse(localStorage.getItem("cart") ?? "[]"),
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzas(res.data))
      .catch((err) =>
        toast.error("Hiba történt a pizzák lekérésekor: " + err.message),
      );
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const genCads = (p: Pizza) => {
    return (
      <Col>
        <Card
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Card.Img variant="top" src={`${BASEURL}/kepek/${p.imageUrl}`} />
          <Card.Body
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Card.Footer
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "auto",
              }}
            >
              <div
                style={{
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  color: "#28a745",
                }}
              >
                {p.ar} Ft
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button
                  variant="success"
                  size="sm"
                  className="flex-grow-1"
                  onClick={() => {
                    setCart([...cart, Number(p.id)]);
                    toast.success(`${p.nev} hozzáadva a kosárhoz!`);
                  }}
                >
                  Kosárba
                </Button>
                <Button
                  onClick={() => navigate(`/pizzak/${p.id}`)}
                  variant="primary"
                  size="sm"
                  className="flex-grow-1"
                >
                  Részletek
                </Button>
              </div>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <TopNav />

      <Row xs={1} md={3} className="g-4">
        {pizzas.map((p) => genCads(p))}
      </Row>
    </Container>
  );
};

export default AllPizza;
