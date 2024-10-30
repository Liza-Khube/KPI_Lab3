'use strict';

// Task 3

const ipConvert = (ip) => {
    const stringArr = ip.split(".");
    const numberArr = stringArr.map(Number);
    const convertIpArr = [
        numberArr[0] << 8 << 8 << 8, 
        numberArr[1] << 8 << 8, 
        numberArr[2] << 8, 
        numberArr[3],
    ];

    return convertIpArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

/*
Example:
const ip1 = "10.0.0.1"
const ip2 = "127.0.0.1"
const ip3 = "192.168.1.10"

console.log(ipConvert(ip1));
console.log(ipConvert(ip2));
console.log(ipConvert(ip3));
*/