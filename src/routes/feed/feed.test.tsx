import { render, screen } from "@testing-library/react";
import { Feed } from "./feed";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
describe("renders app correct", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <Feed />
      </MemoryRouter>
    );
    const h1 = screen.queryByText("feed");
    // expectationsq
    expect(h1).toBeInTheDocument();
  });
});
