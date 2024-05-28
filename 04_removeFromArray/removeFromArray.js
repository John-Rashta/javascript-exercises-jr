const removeFromArray = function(originalArray, ...toRemoveItems) {

    const removeLength = toRemoveItems.length;

    let i = originalArray.length - 1;
    while (i >= 0 ) {
        for (let j = 0; j < removeLength; j++ ) {

            if (originalArray[i] === toRemoveItems[j]) {
                originalArray.splice(i, 1);

            }
        }
        
        i--;

    }

    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
