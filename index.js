import {customMap} from "./array/customMap.js";
import {customFind} from "./array/customFind.js";
import {customFilter} from "./array/customFilter.js";
import {customFindIndex} from "./array/customFindIndex.js";
import {customForeach} from "./array/customForeach.js";

console.log('-------------------- index.js --------------------')


Array.prototype.customMap = customMap;
Array.prototype.customFind = customFind;
Array.prototype.customFilter = customFilter;
Array.prototype.customFindIndex = customFindIndex;
Array.prototype.customForeach = customForeach;

// const numbers = [5, 12, 8, 145, 4]
// console.log(numbers.customMap(n => n * 2))

// const numbers = [12,4,55,66]
// console.log(numbers.customFind(n => n > 20))

// const number2 = [18, 22, 25, 18, 35, 47, 18]
// console.log(number2.customFilter(n => n === 18))

// const numbers3 = [12,4,55,66]
// console.log(numbers3.customFindIndex(n => n > 50))

const numbers4 = [5, 10, 15]
numbers4.customForeach(n => console.log(n * 5));