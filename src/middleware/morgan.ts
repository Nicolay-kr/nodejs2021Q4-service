import morgan from 'morgan';
import { Request } from 'express';
import logger from './logger';

morgan.token('body', (req: Request, _res) => JSON.stringify(req.body));
morgan.token('query', (req: Request, _res) => JSON.stringify(req.query));

export const morganLog = morgan(':method :url :status :body :query', {
    stream: { write: (message) => logger.info(message.trim()) },
});