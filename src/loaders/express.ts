import express, {Application, Request, Response, NextFunction} from 'express';
// import cors from 'cors';
// import swaggerUI from 'swagger-ui-express';
// import path from 'path';
// import YAML from 'yamljs';
import { router as userRouter } from '../resources/users/user.router';
import { router as authRouter } from '../resources/auth/auth.router';
import { router as boardRouter } from '../resources/boards/board.router';
import { router as taskRouter } from '../resources/tasks/task.router';
import {morganLog} from '../middleware/morgan';
import errorHandler from '../middleware/unhandledErrorsHandler';
import handleException from '../middleware/uncaughtErrorsHandler';
// import authRouter from '../resources/auth/auth.router';
import { auth } from '../middleware/auth';

export {}

interface LoaderArgs {
  app: Application
}
export const expressLoader = async ({ app }: LoaderArgs): Promise<Application> =>{
  // const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

  // app.use(cors);
  app.use(express.json());
  app.use(morganLog);
  handleException();

  // app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  app.use('/', (req: Request, res: Response, next: NextFunction ) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  });

  app.use('/', authRouter);
  app.use('/login', userRouter);
  app.use('/users',auth, userRouter);
  app.use('/boards',auth, boardRouter);
  app.use('/boards/:boardId/tasks',auth, taskRouter);

  app.use(errorHandler);

  return app

}
