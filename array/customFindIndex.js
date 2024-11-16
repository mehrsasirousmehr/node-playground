function customFindIndex (callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i])){
            return i;
        }
    }
    return undefined;
}

export {customFindIndex};