// const uuid = require('uuid');
import { v4 as uuidv4 } from 'uuid';



interface IColumn {
  id: string,
  title: string,
  order: number
}
interface IBoard {
  id: string,
  title: string,
  columns: Array<IColumn>
}

class Column implements IColumn {
  id: string;

  order: number;

  title: string;

  constructor({ id = uuidv4(), title = '', order = 0 }) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

}

class Board implements IBoard{

  id: string;
  title: string;
  columns: Array<IColumn>;
  
  constructor({
    id = uuidv4(),
    title = 'string',
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
