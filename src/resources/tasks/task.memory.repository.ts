import { EntityRepository, getConnection, Repository } from "typeorm";
import {Task} from './task.model';

@EntityRepository(Task)
class TaskRepository extends Repository<Task> {
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

export  const taskRepository = getConnection().getCustomRepository(TaskRepository);