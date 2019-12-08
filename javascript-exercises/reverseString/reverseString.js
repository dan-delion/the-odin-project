const reverseString = function(s) {
    let result = '';
    for (let i = s.length - 1; i > -1; --i) {
        result = result.concat(s[i]);
    }
    return result;
}

module.exports = reverseString
