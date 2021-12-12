import { v4 as uuidv4 } from 'uuid';
import {Column,IColumn} from './column.model';

interface IBoard {
  id: string,
  title: string,
  columns: Array<IColumn>
}


class Board implements IBoard{

  id: string;

  title: string;

  columns: Array<IColumn>;
  
  constructor({
    id = uuidv4(),
    title = 'string',
    // eslint-disable-next-line no-array-constructor
    columns = new Array<IColumn>()
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(
      (item: IColumn) =>
          new Column({ id: item.id, title: item.title, order: item.order })
  );
  }
}

export {Board};
