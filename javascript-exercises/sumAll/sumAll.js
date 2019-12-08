const sumAll = function(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number'
        || start < 0 || end < 0)
        return 'ERROR';
    if (start > end) [start, end] = [end, start];
    let result = 0;
    for (let i = start; i < end + 1; ++i) {
        result += i;
    }
    return result;
}

module.exports = sumAll
