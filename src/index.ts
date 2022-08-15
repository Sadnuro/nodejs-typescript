// const express = require('express');  // commonjs
import express from 'express';  // import/export: ESModules => Compile gen commonjs
import morgan from 'morgan';

import diaryRouter from './routes/diariesRouter';

const PORT = 3000;
const app = express();
app.use(express.json());    // Middleware: transform req.body to JSON
app.use(morgan('dev'));

app.use('/api/diaries', diaryRouter);
app.get('/ping', (_, res)=>{    // Ignorar parametro: _ | _req
    console.log('Someone pinged here!');
    res.send('Pong');
})


app.listen(PORT, ()=>{
    console.log('Server running at port:', PORT);
})