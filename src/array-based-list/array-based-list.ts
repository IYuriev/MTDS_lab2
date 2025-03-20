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
    this.validateIndex(index);
    return this.list[index];
  }

  insert(element: string, index: number): void {
    this.validateIndex(index);
    this.list.splice(index, 0, element);
  }

  delete(index: number): string {
    this.validateIndex(index);
    return this.list.splice(index, 1)[0];
  }

  private validateIndex(index: number): void {
    if (index < 0 || index >= this.list.length) {
      throw new Error("Index out of bounds");
    }
  }
}
