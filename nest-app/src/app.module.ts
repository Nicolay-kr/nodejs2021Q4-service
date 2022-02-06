import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './resources/users/users.module';
import { BoardsModule } from './resources/boards/boards.module';
import { TasksModule } from './resources/tasks/tasks.module';
// import { AuthModule } from './auth/auth.module';
import { CommonConfigModule } from './common/common-config.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    BoardsModule,
    TasksModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // AuthModule,
    CommonConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
