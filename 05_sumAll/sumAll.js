const sumAll = function(startNumber,finalNumber) {
    let total = 0;
    for (i = 0; i < finalNumber; i++) {
        total += startNumber+i
    }
    return total
}
// Do not edit below this line
module.exports = sumAll;
