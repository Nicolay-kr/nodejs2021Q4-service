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
  id!: string;

  @Column()
  login!: string;

  @Column()
  name!: string;

  @Column()
  password!: string;
}
