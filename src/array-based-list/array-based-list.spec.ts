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
});
