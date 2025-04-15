export interface List {
  append(item: string): void;
  get(index: number): string;
  length(): number;
  insert(item: string, index: number): void;
  delete(index: number): string;
  deleteAll(item: string): void;
  clear(): void;
  findFirst(item: string): number;
  findLast(item: string): number;
  reverse(): void;
  clone(): List;
  extend(items: string[]): void;
}
