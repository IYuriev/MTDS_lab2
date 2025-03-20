export class ArrayBasedList {
  private list: string[];

  constructor() {
    this.list = [];
  }

  length(): number {
    return this.list.length;
  }

  append(element: string): void {
    this.list.push(element);
  }

  get(index: number): string {
    if (index < 0 || index >= this.list.length)
      throw new Error("Index out of bounds");
    return this.list[index];
  }
}
