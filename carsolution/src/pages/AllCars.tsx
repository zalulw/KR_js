import { useEffect, useState } from "react";
import type { Car } from "../types/Car";
import apiCLient, { BACKENDURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
    // save the cart array (was incorrect JSON.stringify usage)
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const generateCards = (c: Car, idx: number) => {
    return (
      <Col key={c.id ?? idx} className="mb-3">
        <Card style={{ width: "18rem" }}>
          <Carousel>
            {c?.images?.map((url, j) => (
              <Carousel.Item key={j}>
                <img
                  className="d-block w-100"
                  src={`${BACKENDURL}/kepek/${url}`}
                  alt={`${c.marka ?? "car"}-${j}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body>
            <Card.Title>{c.marka ?? "Ismeretlen márka"}</Card.Title>
            <Card.Text>{c.modell ?? ""}</Card.Text>
            <Card.Text>
              {c.ar?.toLocaleString() ?? "Ár ismeretlen"} Ft
            </Card.Text>
            <Card.Text>{c.leiras ?? "Nincs leírás"}</Card.Text>
            <Button
              onClick={() => navigate(`/car/${c.id}`)}
              variant="primary"
              className="me-2"
            >
              Megtekintés
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return <Row>{cars.map((c, idx) => generateCards(c, idx))}</Row>;
};

export default AllCars;
