import {customMap} from "./array/customMap.js";
import {customFind} from "./array/customFind.js";

console.log('-------------------- index.js --------------------')


Array.prototype.customMap = customMap;
Array.prototype.customFind = customFind;

// const numbers = [5, 12, 8, 145, 4]
// console.log(numbers.customMap(n => n * 2))

const numbers = [12,4,55,66]
console.log(numbers.customFind(n => n > 20))



