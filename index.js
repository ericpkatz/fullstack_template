const pg = require('pg');
const client = new pg.Client('postgres://localhost/fullstack_template_db');
const express = require('express');
const app = express();
const path = require('path');

const homePage = path.join(__dirname, 'index.html');

app.get('/', (req, res)=> res.sendFile(homePage));

const reactApp = path.join(__dirname, 'dist/main.js');

app.get('/dist/main.js', (req, res)=> res.sendFile(reactApp));

const init = async()=> {
  await client.connect();
  console.log('connected to database');
  const SQL = `
    SQL SETUP AND SEED
  `;

  const port = process.env.PORT || 3000;
  app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
  });
}

init();
