"use strict";
let fName = "Nguyễn";
let lName = "Dương";
let fullName;
let capitalizedFName = fName.charAt(0).toUpperCase() + fName.slice(1);
let capitalizedLName = lName.charAt(0).toUpperCase() + lName.slice(1);
if (fName.charAt(0).toUpperCase() === fName.charAt(0) && lName.charAt(0).toUpperCase() === lName.charAt(0)) {
    fullName = capitalizedFName + " " + capitalizedLName;
}
else {
    fullName = capitalizedLName + " " + capitalizedFName;
}
console.log(fullName);
