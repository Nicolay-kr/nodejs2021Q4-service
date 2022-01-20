import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

  @Column('varchar', {length: 255, default: 'login'})
  login: string;

  @Column('varchar', {length: 255, default: 'user'})
  name: string;

  @Column('varchar', {length: 255, select: false})
  password: string;
}
