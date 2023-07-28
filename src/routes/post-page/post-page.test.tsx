import { render, screen } from "@testing-library/react";
import { PostPage } from "./post-page";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
describe("renders app correct", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <PostPage />
      </MemoryRouter>
    );
    const h1 = screen.queryByText("Comments");
    // expectationsq
    expect(h1).toBeInTheDocument();
  });
});
