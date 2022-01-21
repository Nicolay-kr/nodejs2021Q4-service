
import { ErrorRequestHandler } from 'express';
import logger from './logger';

const errorHandler: ErrorRequestHandler = (err, _req, res) => {
    console.log(err);
    logger.error(`${err} Internal Server Error`);
    res.status(500).send('Oops, something broke!');
};
export default errorHandler