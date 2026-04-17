import { divide } from "../index.js"

test('divide', () => {
    expect(divide(10, 2)).toBe(5)
    expect(divide(10, 0)).toBe(Infinity)
    expect(divide(10, -2)).toBe(-5)
})