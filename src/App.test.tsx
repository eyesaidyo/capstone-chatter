// import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";
describe("renders app correct", async () => {
  it("should render", async () => {
    render(<App />);
    const h1 = await screen.queryByText("rasine");
    //expectations
    expect(h1).not.toBeNull();
  });
});
