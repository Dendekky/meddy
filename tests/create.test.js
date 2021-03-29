import { render, screen } from "@testing-library/react";
import App from "../pages/create";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: "Submit" })
    ).toBeInTheDocument();
  });
});