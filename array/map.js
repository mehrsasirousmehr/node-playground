const numbers = [1,2,3];
// console.log(numbers)

function double(value) {
    if (!Array.isArray(value)) return;
    let doubledValue = [];
    for (let i = 0; i < value.length; i++) {
        doubledValue.push(value[i] * 2);
    }
    return doubledValue
}

const doubledNumbers = double(numbers);
// console.log(doubledNumbers);

const doubleNumber2 = numbers.map(num => num * 2)
// console.log(doubleNumber2);

export {double, numbers}