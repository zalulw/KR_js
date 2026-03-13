// @vitest-environment happy-dom

import { BASEURL } from "../api/apiClient";

test("BASEURL is set correctly", () => {
  expect(BASEURL).toBe("http://localhost:8001/api");
});
