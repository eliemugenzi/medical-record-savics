import express from 'express';
import 'dotenv/config';
import './database/config/config';

const app=express();
import router from './routes';

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.use('/', router);

export default app;
