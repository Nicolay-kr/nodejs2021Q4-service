import { EntityRepository, getConnection, Repository } from "typeorm";
import {User} from './user.model';

@EntityRepository(User)
class UserRepository extends Repository<User> {
}

export  const userRepository = getConnection().getCustomRepository(UserRepository);