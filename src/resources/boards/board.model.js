// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'string',
    columns = {
      id: 'string',
      title: 'string',
      order: 0,
    },
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns
  }
}

module.exports = Board;
