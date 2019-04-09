//benchmark the time for crypto - write crypto. run it, note the time

// repeat it - 2 times run - same time

// repeat it - 5 times run - not same

// change thread to 1, then to 5


process.env.UV_THREADPOOL_SIZE = 6;

const crypto = require('crypto');
const start = Date.now()

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('6:', Date.now() - start);
    });
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2:', Date.now() - start);
});


crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3:', Date.now() - start);
});


crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4:', Date.now() - start);
});


crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5:', Date.now() - start);
});