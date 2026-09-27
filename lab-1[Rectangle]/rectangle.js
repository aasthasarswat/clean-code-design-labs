class Rectangle {
  #length;
  #breadth;
  constructor(length, breadth) {
    if (length <= 0 || breadth <= 0) {
      throw new Error("Invalid dimensions");
    }
    this.#length = length;
    this.#breadth = breadth;
  }

  getArea() {
    return this.#length * this.#breadth;
  }

  getPerimeter() {
    return 2 * (this.#length + this.#breadth);
  }
}

export default Rectangle;
