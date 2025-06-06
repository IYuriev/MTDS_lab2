import { ArrayBasedList } from "../array-based-list/array-based-list";
import { DoublyLinkedList } from "../doubly-linked-list/doubly-linked-list";
import { List } from "../types/list";

function runListTests(name: string, createList: () => List) {
  describe(name, () => {
    let list: List;

    beforeEach(() => {
      list = createList();
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

    describe("deleteAll", () => {
      it("should delete all occurrences of an element", () => {
        list.append("A");
        list.append("B");
        list.append("A");
        list.deleteAll("A");
        expect(list.length()).toBe(1);
        expect(list.get(0)).toBe("B");
      });

      it("should not delete anything if the element does not exist", () => {
        list.append("A");
        list.append("B");
        list.deleteAll("C");
        expect(list.length()).toBe(2);
      });
    });

    describe("clear", () => {
      it("should clear the list", () => {
        list.append("A");
        list.append("B");
        list.clear();
        expect(list.length()).toBe(0);
      });
    });

    describe("findFirst", () => {
      it("should find the first occurrence of an element", () => {
        list.append("X");
        list.append("Y");
        list.append("X");
        expect(list.findFirst("X")).toBe(0);
      });

      it("should return -1 if element is not found", () => {
        expect(list.findFirst("R")).toBe(-1);
      });
    });

    describe("findLast", () => {
      it("should find the last occurrence of an element", () => {
        list.append("X");
        list.append("Y");
        list.append("X");
        expect(list.findLast("X")).toBe(2);
      });

      it("should return -1 if element is not found", () => {
        expect(list.findLast("R")).toBe(-1);
      });
    });

    describe("reverse", () => {
      it("should reverse the list", () => {
        list.append("A");
        list.append("B");
        list.append("C");
        list.reverse();
        expect(list.get(0)).toBe("C");
        expect(list.get(1)).toBe("B");
        expect(list.get(2)).toBe("A");
      });

      it("should reverse an empty list", () => {
        list.reverse();
        expect(list.length()).toBe(0);
      });
    });

    describe("clone", () => {
      it("should clone the list correctly", () => {
        list.append("A");
        list.append("B");
        const cloned = list.clone();
        expect(cloned.length()).toBe(2);
        expect(cloned.get(0)).toBe("A");
        expect(cloned.get(1)).toBe("B");
      });

      it("should not affect the original list when modifying the clone", () => {
        list.append("A");
        const cloned = list.clone();
        cloned.append("B");
        expect(list.length()).toBe(1);
        expect(cloned.length()).toBe(2);
      });
    });

    describe("extend", () => {
      it("should extend the list with another list", () => {
        list.append("A");
        list.extend(["B", "C"]);
        expect(list.length()).toBe(3);
        expect(list.get(1)).toBe("B");
        expect(list.get(2)).toBe("C");
      });
    });
  });
}

runListTests("ArrayBasedList", () => new ArrayBasedList());
runListTests("DoublyLinkedList", () => new DoublyLinkedList());
