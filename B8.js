"use strict";
let fName;
let lName;
let fullName;
fName = "Nguyễn";
lName = "Dương";
if (fName[0].toUpperCase() && lName[0].toUpperCase()) {
    fullName = fName + " " + lName;
}
else {
    fName[0].toUpperCase();
    lName[0].toUpperCase();
    fullName = lName + " " + fName;
}
console.log(fullName);
