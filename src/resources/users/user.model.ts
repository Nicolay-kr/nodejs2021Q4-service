import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {JWT_SECRET_KEY} from '../../common/config';

// const uuid = require('uuid');


export interface IUser {
  id: string,
  name: string,
  login: string,
  password: string
}

@Entity({ name: "users" })
export class User implements IUser{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {length: 255, default: 'login', unique: true})
  login: string;

  @Column('varchar', {length: 255, default: 'user'})
  name: string;

  @Column('varchar', {length: 255, select: false})
  password: string;

  @BeforeInsert()
  generatePasswordHash() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  async generateAuthToken() {
    const token = jwt.sign({ userId: this.id, login: this.login }, JWT_SECRET_KEY!, {
      expiresIn: '1h',
    });
    return token;
  }
  
  static toResponse({ id, login, name }: User) {
    return { id, login, name };
  }
}
