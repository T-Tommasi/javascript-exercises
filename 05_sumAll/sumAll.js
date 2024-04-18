const sumAll = function(startNumber,finalNumber) {
    let total = 0;
    if (startNumber < 0 || finalNumber < 0) {
        return 'ERROR'
    } else if (typeof startNumber != Number || typeof finalNumber != Number) {
        return 'ERROR'
    } else {
        if (startNumber > finalNumber) {
            for (i = 0; total < startNumber; i++) {
                total += finalNumber+i;
            }
        } else {
            for (i = 0; total < finalNumber; i++) {
                total += startNumber+i;
            }
        }
    }
    return total
}
// Do not edit below this line
module.exports = sumAll;
