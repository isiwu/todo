import express from 'express';
import path from 'path';
//import cookieParser from 'cookie-parser';
import logger from 'morgan';

import dbConnection from "./connectdb";
import indexRouter from './routes/index';
//import usersRouter from './routes/users';

import "core-js/stable";
import "regenerator-runtime/runtime";

const app = express();


dbConnection.authenticate()
.then(async () => {
  console.log("Database connection successfull")
  await dbConnection.sync();
})
.catch(error => {
  console.log(`Could not connect to the database to due: ${error}`)
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', indexRouter);
//app.use('/users', usersRouter);

export default app;
