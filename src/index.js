module.exports = function reverse (n) {
    return n<0?(n*-1).toString().split('').reverse().join(''):n.toString().split('').reverse().join('');
}