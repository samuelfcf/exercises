import { sumAllTotal } from "../src/app.js"

describe("Suit de app", () => {

  it("returns 8 for sum2numbers", () => {
    const result = sumAllTotal(3, 5);
    expect(result).toEqual(8);
  })
})