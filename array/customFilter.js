function customFilter(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i])
        }
    }
    return result;
}

export {customFilter};