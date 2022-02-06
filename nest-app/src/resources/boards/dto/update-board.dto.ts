import { ColumnEntity } from '../entities/column.entity';

export class UpdateBoardDto {
  title?: string;
  columns?: ColumnEntity[];
}
