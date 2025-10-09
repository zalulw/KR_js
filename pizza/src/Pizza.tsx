import { useState, useEffect } from "react";
import react from "react";
import { useParams } from "react-router-dom";
import type { Pizza } from "./types/pizzaType.ts";

function Pizza() {
  const { id } = useParams();
  return <>{id}</>;
}

export default Pizza;
