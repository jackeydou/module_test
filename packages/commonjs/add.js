var a = 1;
function add(a, b) {
    return a + b;
}

setTimeout(() => {
    a += 1;
    console.log('a += 1, a:', a);
}, 100)

module.exports = {
    a,
    add
}