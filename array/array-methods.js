// -------  splice -------
const number = [1,2,3,4]
const newNum = number.splice([number.length - 1]);
console.log(newNum);
console.log(number);

// -------  pop -------
const numbers1 = [1,2,3,4]
const newNums1 = numbers1.pop();
console.log(newNums1);
console.log(numbers1);

// -------  shift -------
const animal = ['fish', "cat", "dog", "lion"];
const newAnimal = animal.shift()
console.log(newAnimal)
console.log(animal)

// ------- unshift ------
const frute  = ['apple', 'orange', 'banana'];
const newFrute = frute.unshift("pineapple")
console.log(newFrute)
console.log(frute)

// ------ slice ------
const name = ['yashar', 'mehrsa', 'sophia', 'mahla']
const newName = name.slice(1, 2)
console.log(newName)
console.log(name)