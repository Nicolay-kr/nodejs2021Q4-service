import { createConnection, Connection } from 'typeorm';
import connectionOptions from './ormconfig';

export const postgresLoader = async ():Promise<Connection>=>{
  try {
    const connection = await createConnection(connectionOptions);
    console.log("DB is Connect");
    

    return connection
  } catch (err) {
    throw new Error(`
    DB isn't Connect.
    Error: ${err}
    `)
  }
}

