import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Options } from "./Options";
import { ListOfPeople } from "../../service";

describe("Options component", () => {
  let clickedValue = "";

  const handleClick = (value: string) => {
    clickedValue = value;
  };

  const mockOptions = [
    {
      name: "Luke",
    },
    { name: "Leia" },
  ] as unknown as ListOfPeople[];

  it("renders options", () => {
    const { getByText } = render(
      <Options
        options={mockOptions}
        value=""
        onClick={handleClick}
        isLoading={false}
      />
    );

    const option1 = getByText("Luke");
    const option2 = getByText("Leia");

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  it("handles click event", () => {
    const { getByText } = render(
      <Options
        options={mockOptions}
        value=""
        onClick={handleClick}
        isLoading={false}
      />
    );

    const option1 = getByText("Luke");
    fireEvent.click(option1);

    expect(clickedValue).toEqual("Luke");
  });
});
