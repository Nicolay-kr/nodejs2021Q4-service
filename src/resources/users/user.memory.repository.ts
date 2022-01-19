import { EntityRepository, getConnection, Repository } from "typeorm";
import {User} from './user.model';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  // getAll(id: string) {
  //   return this.createQueryBuilder("users")
  //     .where("users.id = :id", { id })
  //     .getOne();
  // }

  // updateName(id: number, name: string) {
  //   return this.createQueryBuilder("users")
  //     .update()
  //     .set({ name })
  //     .where("users.id = :id", { id })
  //     .execute();
  // }
}

export  const userRepository = getConnection().getCustomRepository(UserRepository);