const repeatString = function(s, n) {
    if (n < 0) {
        return 'ERROR';
    }
    return s.repeat(n);
}

module.exports = repeatString
