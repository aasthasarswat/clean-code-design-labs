import Square from "./square";

describe("Square", () => {
  test("areaOfSquareWithSideLengthThreeIsNine", () => {
    const square = new Square(3);
    expect(square.getArea()).toBe(9);
  });

  test("perimeterOfSquareWithSideLengthThreeIsTwelve", () => {
    const square = new Square(3);
    expect(square.getPerimeter()).toBe(12);
  });

  test.each([[0], [-1]])(
    "squareCannotBeCreatedWithInvalidSideLength(%i)",
    (sideLength) => {
      expect(() => new Square(sideLength)).toThrowError(
        "Invalid square dimensions",
      );
    },
  );
});
