import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_URL } = process.env;

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection;

db.once('open', ()=>{
  console.log('The application is connected to MongoDB');
});

db.on('error', console.error.bind(console, 'Database connection error'));
