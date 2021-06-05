const dotenv = require('dotenv');
const path = require('path');

switch(process.env.NODE_ENV) {
  case 'development':
  default:
    dotenv.config({path: path.resolve(path.join(__dirname, '.dev.env'))});
  case 'production':
    dotenv.config({path: path.resolve(path.join(__dirname, '.prod.env'))});
}