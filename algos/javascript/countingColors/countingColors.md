countingDuplicates 🔴 🔴 🔵
Create a function called countDuplicates that takes in an array of objects. Each object has a key called color that contains an array of strings of named colors and will look like the following:

{ colors: ["blue", "purple", "red"] }
Color names are repeated in the several of the arrays. The function will return a single object that contains unique key names of each color and a number representing how many times that color has been referenced in any of the arrays.

{ blue: 3, purple: 1, red: 2, black: 1, orange: 2, green: 1 }
Instructions
Create a repl, and title it the name of this coding challenge.

Add your: First name of the driver, First name of the navigator and repl link to this Google Sheet

/**
 * @param {obj[]} // an array of objs, with arrays inside of them 
 * @return {} // an obj with the colors as keys, and the count as values
 */
 let countingDups = (arr) => {

    return countObj;
 }

// INPUT Arr
const colorsArr = [
  { colors: ["blue", "purple", "red"] },
  { colors: ["black", "orange", "blue"] },
  { colors: ["green", "red", "blue", "orange", 'green'] }
];

// OUTPUT
// => { blue: 3, purple: 1, red: 2, black: 1, orange: 2, green: 1 }
Notes for Developers 👉
// what do we know?
    // our array of colors is an array of objects, who's values are nested arrays of strings.
    // [
      // { colors: [ "black", "purple", "red" ] },
      // ..
      // {..}
    // ]

// how many ways we access things in an object?
    // https://www.w3schools.com/js/js_objects.asp
        // https://www.w3schools.com/js/tryit.asp?filename=tryjs_objects_properties_2
        // https://www.w3schools.com/js/tryit.asp?filename=tryjs_objects_properties_1

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
        // myCar['make'] = 'Ford';
        // myCar['model'] = 'Mustang';
        // myCar['year'] = 1969;
Possible Solutions:
Nested for loops & if/else
// PSEUDOCODE EXAMPLE (NESTED LOOPS AND IF/ELSE)
// SET a new variable called count to an empty object
// LOOP over the input array of objects
//   LOOP over the array of colors
//     IF the key exists in the countDups object
//       INCREASE the value by 1
//     ELSE
//        ADD a new key set to the color name to countDups
//        SET its value to 1
//   END LOOP
// END LOOP
// RETURN the count object
Nested forEach loops and ternary operators
.forEach

// .forEach()
    // arr.forEach(callback(currentValue, index, array) {
      // execute something
    // });
.reduce() and nested .forEach
.reduce

// .reduce()
      // arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
        // return result from executing something for accumulator or currentValue
      // }[, initialValue]);

      // arr.reduce( (acc, currectvalue, index, srcArray) => { }, initialValue )
Recursion
// BASE CASE...this stops the function from calling itself
// RECURSIVE CASE...this calls the function again, passing in whatever it needs