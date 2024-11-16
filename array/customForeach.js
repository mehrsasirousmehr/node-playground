function customForeach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
}

export { customForeach }