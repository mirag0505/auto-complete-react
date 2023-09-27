import { sumNumbers } from "./exampleFn";
import { describe, it, expect } from "vitest";

describe("HTMLtoObject tests", () => {
  it("HTMLtoObject empty input", () => {
    const result = sumNumbers(1, 2);
    expect(result).toEqual(3);
  });
});
