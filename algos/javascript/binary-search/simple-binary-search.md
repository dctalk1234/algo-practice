
## Binary Search - GA Assignment

Given an array and an element, determine the index of the element in the array.

return -1 if the element is not found in the array. 

```
// Given array
const things = [1,3,5,7,9];

console.log("Found items");
console.log(binarySearch(things, 3));  // returns 1
console.log(binarySearch(things, 7));  // returns 3
console.log(binarySearch(things, 9));  // returns 4
console.log(binarySearch(things, 1));  // returns 0
```

```
console.log("Not Found items");
console.log(binarySearch(things, 4));  // returns -1
console.log(binarySearch(things, 99));  // returns -1
```