import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ColumnEntity, IColumn } from './column.entity';

interface IBoard {
  id: string,
  title: string,
  columns: IColumn[]
}

@Entity({ name: "boards" })
class BoardEntity implements IBoard{
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('varchar', {length: 255, default: ''})
  title: string;

  @OneToMany(()=> ColumnEntity , column => column.board)
  columns: ColumnEntity[];

}
export {BoardEntity, IBoard}