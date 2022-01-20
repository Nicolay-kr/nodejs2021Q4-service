import express, {Application, Request, Response, NextFunction} from 'express';
// import cors from 'cors';
// import swaggerUI from 'swagger-ui-express';
// import path from 'path';
// import YAML from 'yamljs';
import { router as userRouter } from '../resources/users/user.router';
import { router as boardRouter } from '../resources/boards/board.router';
import { router as taskRouter } from '../resources/tasks/task.router';
import {morganLog} from '../middleware/morgan';
import errorHandler from '../middleware/unhandledErrorsHandler';
import handleException from '../middleware/uncaughtErrorsHandler';

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

  app.use('/users', userRouter);
  app.use('/boards', boardRouter);
  boardRouter.use('/boards/:boardId/tasks', taskRouter);

  app.use(errorHandler);

  return app

}
