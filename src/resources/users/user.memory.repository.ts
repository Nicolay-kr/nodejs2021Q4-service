import { EntityRepository, getConnection, Repository } from "typeorm";
import {User} from './user.model';

@EntityRepository(User)
class UserRepository extends Repository<User> {

  deleteUserById(id: string) {
    return this.createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();
  }
}

export  const userRepository = getConnection().getCustomRepository(UserRepository);