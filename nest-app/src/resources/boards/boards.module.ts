import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardEntity } from './entities/board.entity';
import { ColumnEntity } from './entities/column.entity';
import { BoardsService } from './boards.service';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
  imports: [TasksModule, TypeOrmModule.forFeature([BoardEntity, ColumnEntity])],
})
export class BoardsModule {}
