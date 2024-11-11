import {customMap} from "./array/customMap.js";

console.log('-------------------- index.js --------------------')


Array.prototype.customMap = customMap;
Array.prototype.customFind = function (callback) {
    // TODO: ...
    return undefined;
}

const numbers = [5, 12, 8, 145, 4]

console.log(numbers.customMap(n => n * 2))
console.log(numbers.customFind(n => n * 2))

const result = numbers.find(number => number > 10)
console.log(result)


