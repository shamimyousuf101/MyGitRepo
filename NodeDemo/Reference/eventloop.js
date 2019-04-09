//node myFile.js

//1. execute this file inside node

const pendingTimers = [];
const pendingOSTasks = []; - no threadpool inside libuv but in OS
const pendingOperations = []; - threadpool inside libuv

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();



//2. enter into event loop


function shouldContinue() {
//Three checks to decide whether to continue or not

//Check one: Any pending setTimeout, setInterval, setImmediate?
//Check Two: Any pending OS tasks? (Like server listening to port)
//Check Three: Any pending long running operations? (Like fs module)

return ( pendingTimers.length || pendingOSTasks.length || pendingOperations.length )
}

// Entire body executes in one 'tick'
while(shouldContinue()) {

    // 1) Node looks at pendingTimers and sees if any functions
    // are to be called - setTimeout, setInterval

    // 2) Node looks at penndingOSTasks and pendingOperations
    // and calls relevant callbacks

    // 3) Node pauses execution. Conntinue whenever
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to commplete

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handle any 'close events'
    // Example
    // ReadStream.on('close', () => {
        // cleanup code
    // })

}




// exit back to terminal 