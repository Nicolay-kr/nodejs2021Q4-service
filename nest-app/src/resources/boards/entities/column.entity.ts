import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BoardEntity } from './board.entity';

interface IColumn {
  id: string;
  title: string;
  order: number;
}

@Entity({ name: "columns" })
class ColumnEntity implements IColumn {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('integer',{default: 0})
  order: number;

  @Column('varchar', { length: 255, default: '' })
  title: string;

  @ManyToOne(() => BoardEntity, board => board.columns)
  board: BoardEntity;

}

export {ColumnEntity, IColumn};
