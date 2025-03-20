class Node {
  value: string;
  next: Node | null;
  prev: Node | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  private head: Node | null;
  private tail: Node | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length(): number {
    return this.size;
  }

  append(element: string): void {
    const newNode = new Node(element);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(element: string, index: number): void {
    if (index < 0 || index > this.size) throw new Error("Index out of bounds");
    const newNode = new Node(element);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      newNode.next = current!.next;
      newNode.prev = current;
      if (current!.next) current!.next.prev = newNode;
      current!.next = newNode;
      if (!newNode.next) this.tail = newNode;
    }
    this.size++;
  }

  delete(index: number): string {
    if (index < 0 || index >= this.size) throw new Error("Index out of bounds");
    let deletedValue: string;
    if (index === 0) {
      deletedValue = this.head!.value;
      this.head = this.head!.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
      deletedValue = current!.value;
      if (current!.prev) current!.prev.next = current!.next;
      if (current!.next) current!.next.prev = current!.prev;
      if (current === this.tail) this.tail = current!.prev;
    }
    this.size--;
    return deletedValue;
  }

  get(index: number): string {
    if (index < 0 || index >= this.size) throw new Error("Index out of bounds");
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.value;
  }

  deleteAll(element: string): void {
    let current = this.head;
    while (current) {
      if (current.value === element) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        this.size--;
      }
      current = current.next;
    }
  }

  reverse(): void {
    let current = this.head;
    let temp = null;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp) this.head = temp.prev;
  }
}
