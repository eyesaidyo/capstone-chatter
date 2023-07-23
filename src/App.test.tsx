// import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
describe("renders app correct", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const h1 = screen.queryByText("About Us");
    // expectationsq
    expect(h1).toBeInTheDocument();
  });
});
