const sumAll = function(firstNumber, secondNumber) {

    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return "ERROR";
    

    if (firstNumber < 0 || secondNumber < 0) return "ERROR";
    

    let startNumber;
    let endNumber;

    if (firstNumber > secondNumber) {

        startNumber = secondNumber;
        endNumber = firstNumber;
        
    } else {

        startNumber = firstNumber;
        endNumber = secondNumber;
    }

    total = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        total += i;
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
