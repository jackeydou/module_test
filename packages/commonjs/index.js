const { a, add } = require('./add');

setTimeout(() => {
    console.log('setTimeout in index.js, a: ', a)
    const r = add(a, 1)
    console.log('setTimeout in index.js, add(a, 1): ', r)
}, 1000)

console.log('index.js, a: ', a)
console.log('index.js, add(a, 1)', add(a, 1))
