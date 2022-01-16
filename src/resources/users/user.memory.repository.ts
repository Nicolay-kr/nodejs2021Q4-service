import { EntityRepository, Repository } from "typeorm";
import {User} from './user.model';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByName(id: string) {
    return this.createQueryBuilder("users")
      .where("users.id = :id", { id })
      .getOne();
  }

  updateName(id: number, name: string) {
    return this.createQueryBuilder("people")
      .update()
      .set({ name })
      .where("users.id = :id", { id })
      .execute();
  }
}