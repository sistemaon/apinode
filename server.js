'use strict';

require('./config/dbModels');

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
let morgan = require('morgan');

let app = express();

// Módulos da API
const NotaAPI = require('./modules/Nota/notaRoutes');
const UserAPI = require('./modules/User/userRoutes');

// CORS
app.use(cors());

// body-parser getting info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));


// API JSON
app.use('/api/notas', NotaAPI);
app.use('/api/users', UserAPI);

// server port listen on
const appListen = app.listen(3420);
console.log('Listen on PORT: ', appListen._connectionKey);
