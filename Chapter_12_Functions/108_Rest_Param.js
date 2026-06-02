// Rset or Spread param 

function logResult(suitName, ...results) { // it allow only three dot and always in the last parameter
    console.log(suitName);
    console.log(results);
}

logResult('LoginTest', 1, 2, 3,);
logResult("Registrationresult", "hello", "Passed");
