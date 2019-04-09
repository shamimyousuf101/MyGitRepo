// http
// fs
//  hash 4 times

// change thread to 1, then 5 - see https not affected, and fs behaves


process.env.UV_THREADPOOL_SIZE = 4;
// process.env.UV_THREADPOOL_SIZE = 1;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');


const start = Date.now();

function doRequest() {
    https.request("https://www.google.com", res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log('Https:', Date.now() - start)
        })
    }).end();
}


function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start);
    });
}


doRequest();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
})

doHash();
doHash();
doHash();
doHash();

// try 1 : run then - see the order and FS performance
// try 2 : comand the all hash and try again and see how fast FS is