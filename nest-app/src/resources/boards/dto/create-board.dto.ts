import { ColumnEntity } from '../entities/column.entity';

export class CreateBoardDto {
  title?: string;
  columns?: ColumnEntity[];
}
