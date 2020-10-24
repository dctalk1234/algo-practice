# dnaStrings 🧬

In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Write a function called dnaTransform that takes in a DNA string and returns a string that represents it's compliment.

- add the Driver's name, Navigator's name, and the repl link [here](https://docs.google.com/spreadsheets/d/13tuilM86zSqZxsdBO4Ee5SLX22qjEL1x1xY0oljYbOY/edit#gid=513652238)

```js

/**
 * @param {str} // a string of DNA
 * @return {str} // a string of the DNA's counterpart
 */

 // INPUT:
// "ATTGC"

// OUTPUT:
// => "TAACG"

let dnaStrings = (str) => {

  return dna;
}

```

## Notes for the hackers 👉

```js

// what do we know?
  // each letter in a DNA string has only one counterpart.
    // A <- -> T
    // G <- -> C

// input is a string
  // if we're going to check each letter in the string we'll have to make an array

// output is required to be a string

// resiting the problem:
  // this function will take in a string of "RNA", we will have to check each letter and return a string with the corresponding "RNA"
```

## Possible Solutions

### for...loop + if/else

```js
// PSEUDOCODE FOR LOOP AND IF/ELSE
// SET dnsStr to an empty string
// For Loop over the input string
  // IF the letter is "A", add T to the dnaStr
  // ELSEIF the letter is "T", add "A" to the dnaStr  
  // ELSEIF the letter is "C", add "G" to the dnaStr  
  // ELSEIF the letter is "G", add "C" to the dnaStr  
  // ENDIF
  // return  dnaStr
// END

```

### for...loop + switch

```js
// switch/case => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch


```

### .map() + objects

```js
// .map() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

```

### BONUS: .split() + .map() + .splice() 🍬

```js
// .splice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


```

### BONUS: forEach + switch 🍬

```js


```

### BONUS: Recursion 🍬

```js


```
