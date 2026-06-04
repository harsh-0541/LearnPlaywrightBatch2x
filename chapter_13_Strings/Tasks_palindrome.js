let String = "Madam";
let reversed = "";

for (let i = String.length - 1; i >= 0; i--) {
    reversed += String[i];
}

if (String.toLowerCase() === reversed.toLowerCase()) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}