/*
I learned:
We can access the data of the Objects by using two ways:
No 1. Dot notaiton (.),
No 2. Bracket notation ([]), just like arrays.


For Example:
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val would have a value of the string val1, and prop2val would have a value of the string val2.


Task:
Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
.
*/

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line