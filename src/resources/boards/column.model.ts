import { v4 as uuidv4 } from 'uuid';

interface IColumn {
  id: string,
  title: string,
  order: number
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



export {Column, IColumn};
