import { EntityRepository, getConnection, Repository } from "typeorm";
import {Task, ITask} from './task.model';

@EntityRepository(Task)
class TaskRepository extends Repository<Task> {
  getAll(boardId: string) {
    return this.createQueryBuilder("task")
      .where("task.boardId = :boardId", { boardId })
      .getMany();
  }

  getTaskById(boardId: string, taskId: string) {
    return this.createQueryBuilder("task")
      .where("task.boardId = :boardId", { boardId })
      .andWhere("task.id = :taskId", { taskId })
      .getMany();
  }

  async createTask(boardId: string, task: Partial<ITask>) {
    const { generatedMaps } = await this.createQueryBuilder()
      .insert()
      .into(Task)
      .values([{ ...task, boardId }])
      .execute();
    
  // eslint-disable-next-line dot-notation
  return this.getTaskById(generatedMaps?.[0]?.['boardId'], generatedMaps?.[0]?.['id']);
  }

  async updateTask(boardId: string, taskId: string, updatedTask: Partial<ITask>) {
    await this.createQueryBuilder()
      .update()
      .set(updatedTask)
      .where("task.boardId = :boardId", { boardId })
      .andWhere("task.id = :taskId", { taskId })
      .execute();
    
  return this.getTaskById(boardId, taskId );
  }

  deleteTaskById(boardId: string, taskId: string) {
    return this.createQueryBuilder()
      .delete()
      .from(Task)
      .where("task.boardId = :boardId", { boardId })
      .andWhere("task.id = :taskId", { taskId })
      .execute();
  }

  async unAssignUserId(userId: string) {
    await this.createQueryBuilder()
      .update(Task)
      .set({userId:null})
      .where("userId = :userId", { userId })
      .execute();
  }

  deleteTaskForBoardId(boardId: string) {
    return this.createQueryBuilder()
      .delete()
      .from(Task)
      .where("boardId = :boardId", { boardId })
      .execute();
  }

}

export  const taskRepository = getConnection().getCustomRepository(TaskRepository);