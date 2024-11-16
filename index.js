import {customMap} from "./array/customMap.js";
import {customFind} from "./array/customFind.js";
import {customFilter} from "./array/customFilter.js";

console.log('-------------------- index.js --------------------')


Array.prototype.customMap = customMap;
Array.prototype.customFind = customFind;
Array.prototype.customFilter = customFilter;

// const numbers = [5, 12, 8, 145, 4]
// console.log(numbers.customMap(n => n * 2))

// const numbers = [12,4,55,66]
// console.log(numbers.customFind(n => n > 20))

const number2 = [18, 22, 25, 18, 35, 47, 18]
console.log(number2.customFilter(n => n === 18))

