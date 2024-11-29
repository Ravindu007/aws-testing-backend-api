import winston from 'winston';

const logPath = 'app/logs/application.log'; 

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
      new winston.transports.File({
          filename: logPath,
          level: 'info',
      }),
      new winston.transports.Console({
          format: winston.format.simple(),
      }),
  ],
})

export default logger;