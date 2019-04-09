// use express

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  //do work here
//   doWork(5000);
    res.send('Hi there');
});

app.listen(3000);

// demo in browser - see waiting time


