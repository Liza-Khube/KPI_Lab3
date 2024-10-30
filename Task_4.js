'use strict';

// Task 4

const funcWithArgs = (iface) => {
    const arrayOfFunc = [];
    for (const name in iface) {
        const property = iface[name];
        if (typeof property === "function") {
            arrayOfFunc.push([name, property.length]);
        };
    };
    return arrayOfFunc;
};

/*
Example:
const exampleObject = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3: "abcd",
    m4(x, y, z) {
      return [x, y, z];
    },
  };

console.log(JSON.stringify(funcWithArgs(exampleObject)));
*/