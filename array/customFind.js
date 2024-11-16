function customFind (callback) {
    // TODO: ...
    for (let i = 0; i < this.length; i++){
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;
}

export {customFind};