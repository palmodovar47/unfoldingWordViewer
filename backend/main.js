const request = require('request');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const index = path.join(__dirname, '../dist/index.html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/catalog', (req, res) => {
    request('http://api.unfoldingword.org/uw/txt/2/catalog.json',
    (error, body) => {
      console.log('error:', error);
      res.send(body);
    });
  }
);

router.get('/book/*', (req, res) => {
    const url = req.params[0];
    request(url, (error, body) => {
      console.log('error:', error);
      console.log(url);
      res.json({ 'body': body.body });
    });
  }
);

router.get('/langNames', (req, res) => {
  const url = 'http://td.unfoldingword.org/exports/langnames.json';
    request(url, (error, body) => {
      console.log('error:', error);
      res.json(body.body);
    });
  }
);

app.use('unfoldingWord/api', router);

app.listen(3000)

