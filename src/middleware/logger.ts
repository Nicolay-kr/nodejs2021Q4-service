
import { createLogger , format, transports } from 'winston';

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'debug',
      format: format.cli(),
    }),
    new transports.File({
      filename: './src/logs/errors.log',
      handleExceptions: false,
      level: 'error',
      format: format.combine(
        format.colorize(),
        format.cli(),
      ),
    }),
    new transports.File({
      filename: './src/logs/info.log',
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.cli(),
      ),
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: './src/logs/exceptions.log',
      format: format.combine(
        format.json(),
        format.colorize()
      ),
    }),
  ],
  exitOnError: true,
});


export default logger