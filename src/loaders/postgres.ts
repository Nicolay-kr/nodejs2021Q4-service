import { createConnection, Connection } from 'typeorm';
import connectionOptions from '../common/ormconfig';
// import { userRepository } from '../resources/users/user.memory.repository';
// import { User } from '../resources/users/user.model';

export const postgresLoader = async ():Promise<Connection>=>{
  try {
    const connection = await createConnection(connectionOptions);
    
    // const admin = new User();
    // admin.name = 'TEST_USER';
    // admin.login = 'test_user';
    // admin.password = 'T35t_P@55w0rd';    
    // await userRepository.save(admin);
    
    // console.log("DB is Connect");

    return connection
  } catch (err) {
    throw new Error(`
    DB isn't Connect.
    Error: ${err}
    `)
  }
}

