const https = require('https');

function doRequest() {
    https.request("https://www.google.com", res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(Date.now() - start)
        })
    }).end();
}

/////////////

process.env.UV_THREADPOOL_SIZE = 5;

//////////

const crypto = require('crypto');
const start = Date.now()

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1:', Date.now() - start);
});

/////////


fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
})


/////

function doWork(duration) {
    const start = Date.now();
    while(Date.now() - start < duration) {}
}