import express from 'express';
import 'dotenv/config';

const app=express();
import router from './routes';

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs')

const { PORT }=process.env;

app.get('/', router);

app.listen(PORT, ()=>{
    console.log('Server running...');
});