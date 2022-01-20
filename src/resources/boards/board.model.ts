import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {ColumnModel, IColumnModel} from './column.model';

interface IBoard {
  id: string,
  title: string,
  columns: IColumnModel[]
}

@Entity({ name: "boards" })
class Board implements IBoard{
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('varchar', {length: 255, default: ''})
  title: string;

  @OneToMany(()=> ColumnModel , column => column.board)
  columns: IColumnModel[];

}
export {Board, IBoard}