// solution also at https://repl.it/@SampreetChawla/countingDuplicates#index.js

/**
 * @param {obj[]} // an array of objs, with arrays inside of them 
 * @return {} // an obj with the colors as keys, and the count as values
 */

// Nested for loops & if/else
//  const countingDups = (arr) => {
   
//     const countObj = {};
//     for(let index = 0; index < arr.length; index++) {
//       const tempArr = arr[index].colors
//       tempArr.forEach((color) => {
//         if (countObj[color]) {
//           countObj[color] = countObj[color] + 1
//         } else {
//           countObj[color] = 1
//         }
//       })
//     }
//     console.log(countObj);
//  }

// USING Nested forEach loops and ternary operators
const countingDups = (arr) => {   
    
    const countObj = {};
    arr.forEach(currentVal => {
    const tempArr = currentVal.colors
      tempArr.forEach(color => 
       countObj[color] = (countObj[color]) ? countObj[color] + 1 : 1 )
    })
    console.log(countObj);
 }

 //Using .reduce() and nested .forEach
// const countingDups = (arr) => {      
//     let countObj = {};
//     countObj = arr.reduce((countObj, currentVal) => {
//       const tempArr = currentVal.colors;
//       tempArr.forEach(color => 
//        countObj[color] = (countObj[color]) ? countObj[color] + 1 : 1 )
//        return countObj;
//     }, {})
//     console.log(countObj);
//  }


// USING RECURSION
// const countingDups = (arr, index = 0, countObj = {}) => {   
//     if (index === arr.length) {
//       console.log(countObj)
//       return countObj
//     }
//     const tempArr = arr[index].colors
//     tempArr.forEach((color) => {
//       if (countObj[color]) {
//         countObj[color] = countObj[color] + 1
//       } else {
//         countObj[color] = 1
//       }
//     })
//     countingDups(arr, index + 1, countObj);
//  }




// INPUT Arr
const colorsArr = [
  { colors: ["blue", "purple", "red"] },
  { colors: ["black", "orange", "blue"] },
  { colors: ["green", "red", "blue", "orange", 'green'] }
];

// OUTPUT
// => { blue: 3, purple: 1, red: 2, black: 1, orange: 2, green: 1 }

countingDups(colorsArr);
