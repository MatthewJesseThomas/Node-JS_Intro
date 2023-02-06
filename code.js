




























// Module Expression
// let counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this Array';
// };

// module.exports.counter = counter;
//======================================
// Module Pattern
// Third Method
// let counter  = function(arr){
//     return 'There are ' + arr.length + ' elements in this Array';
// };

// let adder = function(a,b){
//     return `The Sum of two Numbers is ${a+b}`;
// };

// let pi = 3.142;

// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi
// };
// Second Method
// module.exports.counter  = function(arr){
//     return 'There are ' + arr.length + ' elements in this Array';
// };

// module.exports.adder = function(a,b){
//     return `The Sum of two Numbers is ${a+b}`;
// };

// module.exports.pi = 3.142;
/* First Method
let counter  = function(arr){
    return 'There are ' + arr.length + ' elements in this Array';
};

let adder = function(a,b){
    return `The Sum of two Numbers is ${a+b}`;
};
let pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/
// ==============================================
// console.log(__dirname);
// console.log(__filename);