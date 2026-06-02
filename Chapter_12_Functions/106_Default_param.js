// default parameters for functions
// Java c sharp not supported Only JS and python support default parameters

function retry(testName, maxReries = 3, delay = 1000) { // default params
    console.log(`Retring ${testName} up to ${maxReries} times and given delay time to ${delay}`);

}

// call the function 
retry("Login Test"); // DEFAULT VALUE IUS USE 
retry("Registration flow ", 5, 2000); // PASS THE VALUE NEW value will show