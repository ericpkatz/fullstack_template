const pg = require('pg');
const client = new pg.Client('postgres://localhost/fullstack_template_db');
const express = require('express');
const app = express();

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
