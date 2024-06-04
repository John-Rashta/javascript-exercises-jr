const palindromes = function (string) {

    let newString = string.replaceAll(/[?!,. ]+/g, "").toLowerCase();
    let reverseString = newString.split("").reverse().join("");

    if (newString === reverseString) {
        
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = palindromes;
