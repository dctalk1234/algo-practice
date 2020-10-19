// take a string input and split the words by spaces
// make a function that will split each letter of each word
// make the function only run if the word has more than 4 letters
// for loop the string to find which words has more than 4 letters
// if loop finds a word with more than 4 letters
// split that word by letters
// reverse the array of split letters
// join the letters back into a string
function spinWords(str) {
    
    let strArr = str.split(' ')

    const reverse = (string) => {
        return string.split('').reverse().join('')
    }

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > 4) {
            let word = strArr[i]
            strArr[i] = reverse(word)
        }
    }
    return strArr.join(' ')
}

console.log(spinWords('Hey fellow warriors'))
console.log(spinWords('This is a test'))
// console.log(spinWords('This is a another test'))
// console.log(spinWords('Making my way downtown walking fast faces pass and im homebound'))