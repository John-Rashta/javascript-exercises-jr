const fibonacci = function(num) {

    newNum = Number(num);

    if (newNum === 0) {
        
        return 0;
    }

    if (newNum < 0) {
        
        return "OOPS";
    }

    let firstNum = 1;
    let secondNum = 0;

    for (let i = 1; i < newNum; i++) {

        if (i % 2 === 0) {

            secondNum += firstNum;

        } else {

            firstNum += secondNum;


        }


    }

    return firstNum + secondNum;

};

// Do not edit below this line
module.exports = fibonacci;
