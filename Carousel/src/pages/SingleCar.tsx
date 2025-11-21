import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Car } from "../types/Car";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

const SingleCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();

  useEffect(() => {
    apiClient.get(`/autok/${id}`).then((res) => setCar(res.data));
  }, [id]);

  return (
    <Container>
      <Carousel>
        {car?.images.map((url) => (
          <Carousel.Item interval={3000}>
            <img src={`${BACKEND_URL}/kepek/${url}`} height={300} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default SingleCar;
