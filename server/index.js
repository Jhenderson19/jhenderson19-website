//environment
require('../environment');

//express setup
const express = require('express');
const app = express();
const path = require('path');
const port = parseInt(process.env.PORT);

//libraries

//routes
app.use('/', path.resolve('.', 'public'));

app.listen(port, () => {
  console.log(`JHenderson19 sever is up and running on port ${port}!`)
})