const oddNumbers = [1,3,5,7,9];
Array.prototype.show = function (){
    console.log(`----> this is arrays's value`,this)
}

const doubledOddNumbers1 = oddNumbers.map(on => on * 2);
console.log(doubledOddNumbers1)

Array.prototype.mapper = function (callback) {
    // TODO: Mehrsa! Make it work! :))
    const callbackResult = [];
    for (let i = 0; i <this.length; i++) {
        callbackResult.push(callback(this[i]));
    }
    return callbackResult;
}

const doubledOddNumbers2 = oddNumbers.mapper(on => on * 2);
console.log(doubledOddNumbers2)

export {doubledOddNumbers2, oddNumbers}