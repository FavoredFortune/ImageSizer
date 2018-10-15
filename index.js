'use strict';
//application dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bodyparser = require('body-parser').urlencoded({extended: true});
const superagent = require('superagent');

//application setup
const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;
// const DATABASE_URL = 'TBD - probably Firebase';
const DATABASE_URL = process.env.DATABASE_URL;

//API keys go here


app.use(cors());

//Database setup goes here
const client = new pg.Client(DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));


app.get('/nyt/articles/:year/:month', bodyparser, (request, response) => {
  const url = `https://api.nytimes.com/svc/archive/v1/${request.params.year}/${request.params.month}.json?`;
  superagent(url)
    .set(`api-key`, `${NYT_API_KEY}`)
    .then(articles => response.send(articles))
    .catch(console.error);
});


app.get('/api/v1/users', (request, response) => {
  client.query(`SELECT * FROM users;`)
    .then(results => {
      console.log(results);
      return results;
    })
    .then(results => response.send(results.rows))
    .catch(console.error);
});

app.post('/api/v1/newUser', bodyparser, (request, response) => {
  client.query(`INSERT INTO users(username, pin, fav_date)VALUES($1, $2, $3);`,
    [
      request.body.username,
      request.body.pin,
      request.body.fav_date
    ])
    .then(() => response.send('Update Complete'))
    .catch(console.error);
});

app.delete('/api/v1/users/:username', bodyparser, (request, response) => {
  client.query(`DELETE FROM users WHERE username=$1;`, [request.params.username])
    .catch(console.error);
});

app.put('/api/v1/users', bodyparser, (request, response) => {
  client.query(`UPDATE users SET fav_date=$2 WHERE username=$1;`, 
    [request.body.username, request.body.date])
    .catch(console.error);
});

app.get('*', (request, response) => response.redirect(CLIENT_URL));
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));