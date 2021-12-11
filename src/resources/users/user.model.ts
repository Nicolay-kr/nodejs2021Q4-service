// const uuid = require('uuid');
import { v4 as uuidv4 } from 'uuid';
// console.log(uuid)

interface IUser {
  id: string,
  name: string,
  login: string,
  password: string
}

class User implements IUser{
  id: string;

  login: string;

  name: string;

  password: string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static fromRequest(body: IUser) {
    return new User(body);
  }

}

module.exports = User;
