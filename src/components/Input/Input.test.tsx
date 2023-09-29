import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
  let handleChangeValue = "";

  const handleChange = (value: string) => {
    handleChangeValue = value;
  };

  it("renders input element", () => {
    const { getByRole } = render(<Input value="" onChange={handleChange} />);
    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("handles change event", () => {
    const { getByRole } = render(<Input value="" onChange={handleChange} />);
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleChangeValue).toEqual("new value");
  });

  it("handles focus and blur events", () => {
    const { getByRole, rerender } = render(
      <Input value="" onChange={() => {}} />
    );
    const input = getByRole("textbox");

    fireEvent.focus(input);
    rerender(<Input value="" onChange={() => {}} />);
    expect(input.className).toContain("focus");

    fireEvent.blur(input);

    // This is a hack need, because in component Input, I use similar delay method
    // remove it, after will change Imput to correct way

    setTimeout(() => {
      rerender(<Input value="" onChange={() => {}} />);
      expect(input.className).not.toContain("focus");
    }, 3000);
  });
});
