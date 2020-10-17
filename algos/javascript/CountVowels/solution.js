function count_vowels(str) {
  let count = 0 
  if ( typeof str !== "string") {
    return null
  }

  for (let i = 0; i < str.length; i += 1) {

    if (str[i] === "a" || str[i] === "A") {
      count += 1
    } 
     if (str[i] === "e" || str[i] === "E") {
      count += 1
    } 
     if (str[i] === "i" || str[i] === "I") {
      count += 1
    } 
     if (str[i] === "o" || str[i] === "O") {
      count += 1
    } 
     if (str[i] === "u" || str[i] === "U") {
      count += 1
    } 
  
  }

return count

}

console.log(count_vowels("aAbcdeEfg")) // => 4
console.log(count_vowels("abcdefg")) // => 2
console.log(count_vowels("bcfgh")) // => 0
console.log(count_vowels(true)) // => null
console.log(count_vowels(12)) // => null
console.log(count_vowels(["a", "b", "c", "d"])) // => null