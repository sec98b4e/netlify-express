const express = require('express'),
  serverless = require('serverless-http'),
  app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    'hello': 'hi!'
  });
});

router.get('/test', (req, res) => {
  res.json({
    'hello': 'test'
  });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);