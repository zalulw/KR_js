import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/User";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Container } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ username: "", password: "" });

  const submit = () => {
    apiClient
      .post("/login", user)
      .then(() => {
        localStorage.setItem("credentials", JSON.stringify(user));
        toast.success("Sikeres bejelentkezés");
        navigate("/");
      })
      .catch((result) => toast.error(result));
  };

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <h1>Bejelentkezés</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <Button onClick={submit} variant="primary">
        Bejelentkezés
      </Button>
    </Container>
  );
};

export default Login;
