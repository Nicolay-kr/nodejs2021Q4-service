// import { createConnection } from 'typeorm';
import { Client } from 'pg';
import { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER,POSTGRES_PASSWORD } from '../common/config';
import logger from '../middleware/logger';

const client = new Client({
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

client.connect().then(() => logger.info('Postgres connected'));
