export interface ITodoElement {
  name: string,
  isCompleted: boolean,
  id: number
}

export class TodoElement implements ITodoElement {
  isCompleted: boolean;
  name: string;
  id: number;

  constructor(id: number, name: string, isCompleted: boolean) {
    this.name = name;
    this.id = id;
    this.isCompleted = isCompleted;
  }
}