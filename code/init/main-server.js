const { port } = require('../config');
const { init: initGrapQl, getServer } = require('./graphql');
const initDb = require('./database');
const app = require('express')();
const os = require('os');

const initRoutes = require('../routes');

module.exports = async () => {
  await Promise.all([initDb(), initGrapQl(app), initRoutes(app)]);

  const hostname = os.hostname();
  const networkInterfaces = os.networkInterfaces();
  const hostIp = Object.values(networkInterfaces)
    .flat()
    .find((details) => details.family === 'IPv4' && !details.internal).address;

  console.log(`🌐 Host IP:       ${hostIp}`);
  console.log(`🖥️  Hostname:      ${hostname}`);
  console.log(`🌍 Express:       http://localhost:${port}`);
  console.log(
    `🚀 Apollo Server: http://localhost:${port}${getServer().graphqlPath}`,
  );
  console.log(
    `🔄​ Subscriptions ready at ws://localhost:${port}${getServer().graphqlPath}`,
  );
};
