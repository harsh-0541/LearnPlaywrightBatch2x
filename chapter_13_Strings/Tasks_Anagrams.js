let word1 = "was";
let word2 = "saw";

let sortedWord1 = word1.toLowerCase().split("").sort().join("");
let sortedWord2 = word2.toLowerCase().split("").sort().join("");

if (sortedWord1 === sortedWord2) {
    console.log("The words are anagrams.");
} else {
    console.log("The words are not anagrams.");
}