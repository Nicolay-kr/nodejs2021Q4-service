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

  @Column('varchar', {length: 255, default: ''})
  title: string;

  @Column('integer', {default: 0})
  order: number;

  @Column('varchar', {length: 255, default: ''})
  description: string ;

  @Column('varchar', {length: 255, default: null, nullable: true,})
  userId: string|null;

  @Column('varchar', {length: 255, default: null, nullable: true,})
  boardId: string|null;

  @Column('varchar', {length: 255, default: null, nullable: true,})
  columnId: string|null;
}


export {Task, ITask};
