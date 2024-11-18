import {customMap} from "./array/customMap.js";
import {customFind} from "./array/customFind.js";
import {customFilter} from "./array/customFilter.js";
import {customFindIndex} from "./array/customFindIndex.js";
import {customForeach} from "./array/customForeach.js";
import {customSome} from "./array/customSome.js";

console.log('-------------------- index.js --------------------')

Array.prototype.customMap = customMap;
Array.prototype.customFind = customFind;
Array.prototype.customFilter = customFilter;
Array.prototype.customFindIndex = customFindIndex;
Array.prototype.customForeach = customForeach;
Array.prototype.customSome = customSome;

const arrayData = [
    {
        name: 'mehrsa',
        age: 20,
        chapter: 'front'
    },
    {
        name: 'sophia',
        age: 22,
        chapter: 'front'
    },
    {
        name: 'zohre',
        age: 23,
        chapter: 'back'
    },
    {
        name: 'arian',
        age: 30,
        chapter: 'back'
    },
];
const objectData = {
    mehrsa: {
        age: 20,
        chapter: 'front'
    },
    sophia: {
        age: 22,
        chapter: 'front'
    },
    zohre: {
        age: 23,
        chapter: 'back'
    },
    arian: {
        age: 30,
        chapter: 'back'
    },
}

function convertPersonArrayToObject(array) {
    const newObject = {};
    array.forEach((item, index) => {
        const {name, ...rest} = item;
        newObject[item.name] = rest;
    })
    return newObject;
}

const objectFromArray = convertPersonArrayToObject(arrayData)

// console.log(objectFromArray);


const objectFromArrayReduce = arrayData.reduce((previousValue, currentValue) => {
    // console.log('previousValue: ',previousValue)
    // console.log('currentValue:  ',currentValue)
    // console.log('currentIndex:  ',currentIndex)
    // console.log('array:         ',array)
    console.log('-----------------------------------------')
    const {name,...rest} = currentValue;
    previousValue[currentValue.name] = rest;
    return previousValue;
},{})

const objectFromArrayReduceAlt = ['m','e','h','r','s','a'].reduce((acc, curr) => {
    return acc.concat(curr);
},'')

console.log(objectFromArrayReduceAlt)