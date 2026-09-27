import Rectangle from "./rectangle.js";

describe("Rectangle", () => {
  test("areaofthreebytworectangleissix", () => {
    const rectangle = new Rectangle(3, 2);
    expect(rectangle.getArea()).toBe(6);
  });
  test("areaoffivebyfourrectangleistwenty", () => {
    const rectangle = new Rectangle(5, 4);
    expect(rectangle.getPerimeter()).toBe(18);
  });
  test.each([
    [0, 0],
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [1, -1],
    [-1, -1],
  ])(
    "rectangleCannotBeCreatedWithInvalidDimensions(%i, %i)",
    (width, height) => {
      expect(() => new Rectangle(width, height)).toThrowError(
        "Invalid rectangle dimensions",
      );
    },
  );
});
