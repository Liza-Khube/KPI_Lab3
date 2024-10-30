'use strict';

// Task 1

const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    };
    const length =  max - min + 1;
    return Math.floor(((Math.random() * length))) + min;
};

/*
Checking:
console.log(random(6, 15));
console.log(random(5));
*/