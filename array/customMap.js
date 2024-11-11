function customMap(callback) {
    // TODO: Mehrsa! Make it work! :))
    const callbackResult = [];
    for (let i = 0; i <this.length; i++) {
        callbackResult.push(callback(this[i]));
    }
    return callbackResult;
}

export {customMap};