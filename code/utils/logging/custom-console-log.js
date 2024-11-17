const logger = require('./logger');
console.log = (...args) => {
  logger.info(args.join(' '));
};

console.error = (...args) => {
  logger.error(args.join(' '));
};

console.warn = (...args) => {
  logger.warn(args.join(' '));
};
