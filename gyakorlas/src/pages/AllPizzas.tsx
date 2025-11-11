import { useState, useEffect } from "react";
import './styles/index.css';
import apiClient, {BACKEND_URL} from "../api/apiClient";
import type { PizzaType } from "../types/PizzaType";

function AllPizzas() {
    const [pizzas, setPizzas] = useState<PizzaType[]>([]);


    useEffect(() => {
        apiClient.get('/pizzak').then((response) => setPizzas(response.data)).catch((reason) => alert(reason));
    }, []);

    return <>
    {pizzas.map((p) => {
        <p>
            {p.nev}
            <img src="">
        </p>
    })}
    
    </>
}