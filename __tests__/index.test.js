import { divide } from "../index.js";
import { multiply } from "../index.js";
import { plus } from "../index.js";
import { minus } from "../index.js";

test("divide", () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(10, 0)).toBe(Infinity);
  expect(divide(10, -2)).toBe(-5);
});

test("multiply", () => {
  expect(multiply(10, 2)).toBe(20);
  expect(multiply(10, -2)).toBe(-20);
  expect(multiply(0, 2)).toBe(0);
});

test("plus", () => {
  expect(plus(10, 2)).toBe(12);
  expect(plus(10, -2)).toBe(8);
});

test("minus", () => {
  expect(minus(10, 2)).toBe(8);
  expect(minus(10, -2)).toBe(12);
});
