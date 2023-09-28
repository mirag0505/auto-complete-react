import { describe, expect, it } from "vitest";

import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Render App component", () => {
  it("the title is visible", () => {
    render(<App />);

    const welcomeText = screen.getByText(/Pick/i);

    screen.debug(welcomeText);

    expect(screen.getByText(/Pick/i)).toBeInTheDocument();
  });
});
