'use strict';

// Task 2

const generateKey = (length, characters) => {
    let result = "";
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        ++counter;
    };
    return result;
};

/*
Example: 
const id = "ghfv676cse67r8onoijdr35675tru"
console.log(generateKey(5, id));
*/