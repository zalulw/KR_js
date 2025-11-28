import { useEffect, useState } from "react";
import type { Car } from "../types/Car";
import apiCLient, { BACKENDURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../components/Navbar";

const AllCars = () => {
  const navigate = useNavigate();

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

  const generateCard = (c: Car, idx: number) => {
    return (
      <>
        <Col key={c.id ?? idx} className="mb-3">
          <Card style={{ width: "18rem", height: "35rem" }}>
            {c?.images && c.images.length > 0 ? (
              <Carousel>
                {c.images.map((url, j) => (
                  <Carousel.Item key={j}>
                    <img
                      className="d-block w-100"
                      src={`${BACKENDURL}/kepek/${url}`}
                      height={300}
                      alt={`${c.marka ?? "car"}-${j}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <div style={{ height: 180, background: "#eee" }} />
            )}
            <Card.Body>
              <Card.Title>{c.marka ?? "Ismeretlen márka"}</Card.Title>
              <Card.Text>{c.modell ?? ""}</Card.Text>
              <Card.Text>
                {c.ar?.toLocaleString() ?? "Ár ismeretlen"} Ft
              </Card.Text>
              <Card.Text>{c.leiras ?? "Nincs leírás"}</Card.Text>
              <Button
                onClick={() => {
                  const idNum = Number(c.id);
                  setCart((prev) => {
                    const next = [...prev, idNum];
                    // persist immediately and notify other components/windows
                    localStorage.setItem("cart", JSON.stringify(next));
                    window.dispatchEvent(new Event("cartUpdated"));
                    return next;
                  });
                  toast.success("Sikeresen kosárba tetted a terméket!");
                }}
                variant="success"
              >
                Kosárba
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  };

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {cars.map((i, idx) => generateCard(i, idx))}
      </Row>
    </Container>
  );
};

export default AllCars;
