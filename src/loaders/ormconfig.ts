import { ConnectionOptions } from 'typeorm';
import { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER,POSTGRES_PASSWORD } from '../common/config';
import {User} from '../resources/users/user.model';

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: "postgres",
  entities: [User],
  synchronize:false,
  dropSchema: false,
  migrations: ['./src/migrations/**/*.ts'],
  migrationsRun: false,
  cli: {
    migrationsDir: 'src/migrations'
  }
}
export default connectionOptions;