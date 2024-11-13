const express = require('express');

const homeController = require('../controllers/homeController');
const healthController = require('../controllers/healthController');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', homeController);
  router.get('/health', healthController);

  app.use('/', router);
};
