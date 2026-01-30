import { useEffect, useState } from "react";
import type { Car } from "../types/Car";
import apiClient, { baseUrl } from "../api/apiClient";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

const AllCars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    apiClient
      .get("/autok")
      .then((res) => setCars(res.data))
      .catch((err) => alert(err));
  }, []);

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
                      src={`${baseUrl}/kepek/${url}`}
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
