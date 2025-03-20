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
}
