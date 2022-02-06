import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
