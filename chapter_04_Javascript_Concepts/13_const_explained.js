const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.


let name = "pending";
name = "done";
{
    let name = "Dutta";
}

function say() {
    let name = "Dutta";
}
say();
say();

//Can we change the value of a cont variable? Explain with an example.

//No, we cannot change(reassign) the value of a const variable once it has been initialized.The const keyword creates a read-only reference to a value.

const person = { name: "Harsh", age: 25 };


//  Cannot reassign the entire object
person = { name: "Rahul", age: 30 };

// ERROR: Assignment to constant variable 

// CAN modify properties of the object
person.age = 26; // This works! 
person.city = "New York"; // This works! 
console.log(person); // { name: "Harsh", age: 26, city: "New York" }