//pseudo code

// node myFile.js

//new timer, pending OSTasks - http , pendingOperation - fs, crypto
// run myFile.js inside node

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// start event loop

function shouldContinue () {
// three checks

retun (pendingTimers.length() || pendingOSTasks.length() || pendingOperations.length())

}

while(shouldContinue) {

    // 1. pendingTimers 
    // 2. pendingOS, penfin Operations
    // 3. Pause. Continue when
    // - 
    // 4. pendingTimer for setiMMEDIATE
    // 5. CLEAN UP CODES

}


//end terminal