function customSome(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return callback(this[i]);
        }
    }
}

export { customSome }