// accept a string as an input
// make a function to reverse the string
// if the string is > 4 ...
// make a new variable to hold the string that will be maskified
// reverse the input string 
// loop through the string if > 4 else return the string back
// if the string index is < 4 add into new string
// if string index goes past 4 add # for each index
// reverse the string one more time to get the first 4 index to show at the end instead of front

function maskify(cc) {

    function reverse(str) {
        return str.split('').reverse().join('')
    }

    if (cc.length > 4) {
        let newString = ''
        let reverseStr = reverse(cc)

        for(let i = 0; i < reverseStr.length; i++) {
            if (i < 4) {
                newString += reverseStr[i]
            } else {
                newString += '#'
            }
        }
        return reverse(newString)
    } else {
        return cc
    }
}
console.log(maskify('4556364607935616'))