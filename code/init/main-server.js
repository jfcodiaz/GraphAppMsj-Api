const { port } = require('../config');
const { init: initGrapQl, getServer } = require('./graphql');
const initDb = require('./database');
const app = require('express')();
const os = require('os');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = async () => {
    await Promise.all([
        initDb(),
        initGrapQl(app),
        app.listen({ port })
    ]);

    const hostname = os.hostname(); 
    const networkInterfaces = os.networkInterfaces();
    const hostIp = Object.values(networkInterfaces)
        .flat()
        .find(details => details.family === 'IPv4' && !details.internal)
        .address;
    console.log(`🌐 Host IP:       ${hostIp}`);
    console.log(`🖥️  Hostname:      ${hostname}`);
    console.log(`🌍 Express:       http://localhost:${port}`);
    console.log(`🚀 Apollo Server: http://localhost:${port}${getServer().graphqlPath}`);
}
  