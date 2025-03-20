import { ArrayBasedList } from "./array-based-list";

describe("ArrayBasedList", () => {
  let list: ArrayBasedList;

  beforeEach(() => {
    list = new ArrayBasedList();
  });

  describe("length", () => {
    it("should start with length 0", () => {
      expect(list.length()).toBe(0);
    });
  });

  describe("append", () => {
    it("should append elements and increase length", () => {
      list.append("A");
      list.append("B");
      expect(list.length()).toBe(2);
      expect(list.get(0)).toBe("A");
      expect(list.get(1)).toBe("B");
    });

    it("should append an element to an empty list", () => {
      list.append("X");
      expect(list.length()).toBe(1);
      expect(list.get(0)).toBe("X");
    });
  });
});
