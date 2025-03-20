export class ArrayBasedList {
  private list: string[];

  constructor() {
    this.list = [];
  }

  length(): number {
    return this.list.length;
  }
}
