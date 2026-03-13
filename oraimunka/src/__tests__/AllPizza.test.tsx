// @vitest-environment happy-dom

import { render, screen, waitFor } from "@testing-library/react";
import AllPizza from "../pages/AllPizza";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

vi.mock("../api/apiClient", () => {
  return {
    default: {
      get: vi.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
              nev: "Margherita",
              leiras: "Finom",
              ar: 1200,
              imageUrl: "1.jpg",
            },
          ],
        }),
      ),
    },
    BASEURL: "http://localhost:8001/api",
  };
});

test("renders pizzas from API and shows buttons", async () => {
  render(
    <MemoryRouter>
      <AllPizza />
    </MemoryRouter>,
  );

  await waitFor(() =>
    expect(screen.getByText("Margherita")).toBeInTheDocument(),
  );

  expect(screen.getByText("Kosárba")).toBeInTheDocument();
  expect(screen.getByText("Részletek")).toBeInTheDocument();
});
