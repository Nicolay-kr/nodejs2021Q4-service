import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

interface ITask {
  id?: string,
  title: string,
  order: number,
  description: string,
  boardId: string|null,
  columnId: string|null,
  userId: string|null,
}
@Entity({ name: "tasks" })

class Task implements ITask {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string|null;

  boardId: string|null;

  columnId: string|null;

  constructor({
    boardId = null,
    id = uuidv4(),
    title = 'New task',
    order = 0,
    description = 'No description',
    userId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}


export {Task};
