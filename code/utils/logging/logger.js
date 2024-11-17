const { createLogger, format, transports } = require('winston');

const env = process.env.NODE_ENV || 'development';
const onDebug = process.env.DEBUG == 'true';

const logFormat = format.combine(
  format.timestamp(),
  format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
  }),
);

const transportConsole = new transports.Console({
  format: format.combine(
    format.colorize(),
    format.printf(({ timestamp, level, message }) => {
      return message;
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    }),
  ),
});

const logger = createLogger({
  level: env === 'production' ? 'info' : 'debug',
  format: logFormat,
  transports: [],
});

const onTest = env === 'test';

if (onTest) {
  logger.add(new transports.File({ filename: 'logs/test.log', level: 'info' }));
} else if (env === 'production') {
  logger.add(
    new transports.File({ filename: 'logs/production.log', level: 'info' }),
  );
}

if ((onTest && onDebug) || env === 'development') {
  logger.add(transportConsole);
}

module.exports = logger;
