const cluster = require('cluster');
console.log(cluster.isMaster);

//copy event loop block here. then do in if-else


// 1) i fork, thread 5
// lot of fork
// slow and fast
// then  ab -c 50 -n 500 localhost:3000/fast

// 2) more children
// replace dowork with crypto 
// thread 1
// 1 fork
//  ab -c 1 -n 1 localhost:3000/ 
 
//   2 fork
//  ab -c 2 -n 2 localhost:3000/ 
 
//  many fork
//  1 thread
//  6 fork 