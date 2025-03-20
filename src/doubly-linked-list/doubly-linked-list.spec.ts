import { DoublyLinkedList } from "./doubly-linked-list";

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe("length", () => {
    it("should start with length 0", () => {
      expect(list.length()).toBe(0);
    });

    it("should update length after appending elements", () => {
      list.append("A");
      list.append("B");
      expect(list.length()).toBe(2);
    });

    it("should return 0 after clearing the list", () => {
      list.append("A");
      list.clear();
      expect(list.length()).toBe(0);
    });
  });
});
