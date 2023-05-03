import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "../Navbar";

test("should render Navbar component", () => {
  render(<Navbar />);
  const NavbarElement = screen.getByTestId("Navbar-1");
  expect(NavbarElement).toBeInTheDocument();
});
