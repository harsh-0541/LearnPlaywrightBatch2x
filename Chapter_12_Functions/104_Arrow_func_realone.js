// I have to check our status code is > 200 and less than 300 to be sure that we have a successful response from the server.
// I can use an arrow function to do this check in a more concise way.

// Example for normal function

function validateStatusCode(status) {

    if (status >= 200 && status < 300) {

        console.log("Succesfully received response from the server");
    }
}

// Example for expression function 

const ValidateStatusCode_Exp = function (status) {
    if (status >= 200 && status < 300) {

        console.log("Succesfully received response from the server");
    }
}

//Example for arrow function
const ValidateStatusCode_Arrow = (status) => {
    if (status >= 200 && status < 300) {

        console.log("Succesfully received response from the server");
    }
}