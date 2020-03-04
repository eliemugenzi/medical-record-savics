import express from 'express';
import 'dotenv/config';

const app=express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const { PORT }=process.env;

app.get('/', (req, res)=>{
    res.send('Hello world');
})

app.listen(PORT, ()=>{
    console.log('Server running...');
});