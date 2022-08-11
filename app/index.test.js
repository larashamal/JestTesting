import { add2Nums, greet, calculateTip } from "./index.js";

test("1 + 1 = 2", () => {
  expect(add2Nums(1, 1)).toBe(2);
});

describe("greet", () => {
  // Happy path test
  test("greets with the correct name", () => {
    expect(greet("John")).toBe("Hello, John!");
    expect(greet("Jane")).toBe("Hello, Jane!");
  });

  // Sad path test
  test("greets anonymous", () => {
    expect(greet()).toBe("Hello, Anonymous!");
  });
});

describe("calculateTip", () => {
  it("calculates the correct tip", () => {
    expect(calculateTip(100, 10)).toBe(10);
    expect(calculateTip(100, 20)).toBe(20);
  });

  it("calculates with a default tip of 20%", () => {
    expect(calculateTip(100)).toBe(20);
  })
});