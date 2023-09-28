import { render, fireEvent, screen } from "@testing-library/react";
import { useState } from "react";
import { Select } from "./Select";
import { ListOfPeople } from "../../service";

function TestComponent() {
  const [value, setValue] = useState("");
  const listOfValue = [
    { name: "Luke" },
    { name: "Darth Vader" },
  ] as unknown as ListOfPeople[];

  return (
    <Select
      value={value}
      onChange={setValue}
      listOfValue={listOfValue}
      isLoading={false}
    />
  );
}

test("calls onChange when input value changes", () => {
  render(<TestComponent />);

  const input: HTMLInputElement = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Lu" } });

  expect(input.value).toBe("Lu");
});
