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

  deleteAll(element: string): void {
    this.list = this.list.filter((e) => e !== element);
  }

  clear(): void {
    this.list = [];
  }

  findFirst(element: string): number {
    return this.list.indexOf(element);
  }

  findLast(element: string): number {
    return this.list.lastIndexOf(element);
  }

  reverse(): void {
    this.list.reverse();
  }

  clone(): ArrayBasedList {
    const newList = new ArrayBasedList();
    newList.list = [...this.list];
    return newList;
  }

  extend(elements: string[]): void {
    this.list = [...this.list, ...elements];
  }

  private validateIndex(index: number): void {
    if (index < 0 || index >= this.list.length) {
      throw new Error("Index out of bounds");
    }
  }
}
