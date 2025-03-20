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

  describe("get", () => {
    it("should return the element at the correct index", () => {
      list.append("A");
      list.append("B");
      expect(list.get(0)).toBe("A");
      expect(list.get(1)).toBe("B");
    });

    it("should throw error for invalid index", () => {
      expect(() => list.get(-1)).toThrow("Index out of bounds");
      expect(() => list.get(2)).toThrow("Index out of bounds");
    });
  });

  describe("insert", () => {
    it("should insert elements at the correct position", () => {
      list.append("A");
      list.append("C");
      list.insert("B", 1);
      expect(list.get(1)).toBe("B");
      expect(list.length()).toBe(3);
    });

    it("should throw error for invalid index", () => {
      expect(() => list.insert("B", -1)).toThrow("Index out of bounds");
      expect(() => list.insert("B", 2)).toThrow("Index out of bounds");
    });

    it("should insert at the beginning", () => {
      list.append("B");
      list.insert("A", 0);
      expect(list.get(0)).toBe("A");
      expect(list.get(1)).toBe("B");
    });
  });

  describe("delete", () => {
    it("should delete element and return it", () => {
      list.append("A");
      list.append("B");
      list.append("C");
      expect(list.delete(1)).toBe("B");
      expect(list.length()).toBe(2);
    });

    it("should throw error for invalid index", () => {
      expect(() => list.delete(-1)).toThrow("Index out of bounds");
      expect(() => list.delete(2)).toThrow("Index out of bounds");
    });
  });
});
