import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Home from "./index";
import userEvent from "@testing-library/user-event";

test("loads and displays name of project and menu items", async () => {
  render(<Home />);

  // assert clicking sidebar button opens sidebar and renders contents
  await userEvent.click(screen.getByRole("button", { name: "Open sidebar" }));
  expect(screen.getByRole("heading")).toHaveTextContent("Maca Screener");
  expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("card gallery");
  expect(screen.getAllByRole("listitem")[1]).toHaveTextContent("tooltip");

  // assert clicking button again closes sidebar
  await userEvent.click(screen.getByRole("button", { name: "Open sidebar" }));
  expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});

test("loads and displays card gallery", async () => {
  render(<Home />);

  // assert clicking sidebar button opens sidebar and renders contents
  await userEvent.click(screen.getByRole("button", { name: "Open sidebar" }));
  await userEvent.click(screen.getByText("card gallery"));

  // assert card gallery renders 9 cards with macadamia nut in the title
  expect(screen.getAllByText("Macadamia Nut").length).toBe(9);
});
