/* 1. Write a function that combines two arrays by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].  */
var a = ['a', 'b', 'c'];
var b = [1, 2];
function mergeArrays(a, b) {
    var result = [];
    while (a.length && b.length) {
        result.push(a.shift(), b.shift());
    }
    console.log('results final', result.concat(a, b));
    return result.concat(a, b);
}
mergeArrays(b, a);
/* 2. Write a function that returns the elements on odd positions in an array.  */
var newArr = [0, 1, 2, 3, 4, 5, 6, 7];
function oddPos(arr) {
    var oddElement = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            oddElement.push(arr[i]);
        }
    }
    console.log(oddElement);
    return oddElement;
}
oddPos(newArr);
/* 3. Write a function that tests whether a string is a palindrome. (Try to solve this without the built-in .reverse() function!) */
function checkPalindrome(str) {
    var len = str.length;
    var mid;
    if (len > 1) {
        if (len % 2 == 0)
            mid = len / 2;
        else
            mid = Math.floor(len / 2);
        var j = len - 1;
        for (var i = 0; i < mid; i++) {
            console.log('i , j ', i, j);
            if (str.charAt(i) != str.charAt(j)) {
                return false;
            }
            j--;
        }
        console.log("Palindrome str", str);
        return true;
    }
    else
        return false;
}
var isPalindrome = checkPalindrome("kaybguitdiugbyak");
console.log("isPalindrome ", isPalindrome);
var isPalindrome1 = checkPalindrome("kaybguitiugbyak");
console.log("isPalindrome ", isPalindrome1);
//  Some examples of palindromic words are redivider, deified, 
//civic, radar, level, rotor, kayak, reviver, racecar, madam, and refer.
