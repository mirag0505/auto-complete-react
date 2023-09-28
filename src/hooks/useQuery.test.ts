import { renderHook } from "@testing-library/react-hooks";
import { useQuery } from "./useQuery";
import { People, api } from "../service";
import { Mock, vi } from "vitest";

vi.mock("../service", () => ({
  api: vi.fn(),
}));

describe("useQuery", () => {
  it("handles loading state", async () => {
    const mockData = { data: "some data" };
    (api as Mock).mockResolvedValue(mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useQuery<People>("https://swapi.dev/api/people")
    );

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBe("");

    // I have timer in component, and he work slouly then this, and I add more time for test
    await waitForNextUpdate({ timeout: 2000 });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe("");
  });
});
