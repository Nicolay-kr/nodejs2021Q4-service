import expres, {Application} from 'express';
import {PORT} from './common/config';
import { loadersInit } from './loaders';


const startServer = async ():Promise<void> => {
  const app: Application = expres();
  await loadersInit({expressApp: app})
  app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
}

startServer()

