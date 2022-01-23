import { Factory, Seeder } from 'typeorm-seeding';
import {User} from '../../src/resources/users/user.model';

export default class CreatePets implements Seeder {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line class-methods-use-this
  public async run(factory: Factory): Promise<any> {
    await factory(User)().create();
  }
}
