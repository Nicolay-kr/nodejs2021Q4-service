import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Board } from "./board.model";

interface IColumnModel {
  id: string;
  title: string;
  order: number;
}

@Entity({ name: "columns" })
class ColumnModel implements IColumnModel {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('integer',{default: 0})
  order: number;

  @Column('varchar', { length: 255, default: '' })
  title: string;

  @ManyToOne(() => Board, board => board.columns)
  board: Board;

}

export {ColumnModel, IColumnModel};
