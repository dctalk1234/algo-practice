function mostOccurance(str) {
    // loop over the string 
    // keep count of the chacter's occurance.
    // return the character that appears the most. 
    let count = {}
    let max = {letter: '', occurance: 0}
    str.split('').forEach((letter) => {
        // if letter is not in the object 
            // set letter occurance +1
        // else
          // set letter to 1
        count[letter] ? count[letter] + 1 : count[letter] = 1
    })
    console.log(count)
    for (const letter in count){
      if(count[letter] > max.occurance) {
          max.letter = letter
          max.occurance = count[letter]
        }
    }
    return max.letter
}

console.log(mostOccurance('aaaaaabcccggfg'))