function palindrome(str) {

    var strLen = str.length;
    var mid = Math.floor(strLen/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[strLen - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log (palindrome('madam'));
console.log (palindrome('five'));
console.log (palindrome('efe'));