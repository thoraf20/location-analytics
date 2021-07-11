import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import morgan from 'morgan';
import cors from 'cors';
import AppError from './utilities/appError.js';
import routes from './routes/analyticRoute.js';
import  {sendErrorDev}  from "./controllers/errorController.js";
import schema from './utilities/Validation/schema.js';

const app = express();
const corsOptions = {
    "origin" : "*",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', routes);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`), 404);
});

app.use(sendErrorDev);

export default app;