
// Simple Binary Search
function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
  
   let firstPos = 0;
  let lastPos = arr.length - 1;
  let middlePos = 0;
  let i = 0;
  let foundAtIndex = -1;
  let isFound = false;
  while(!isFound && firstPos <= lastPos) {
    middlePos = Math.floor((firstPos + lastPos) / 2);
    if(arr[middlePos] === element) {
      // element is found
      foundAtIndex = middlePos;
      isFound = true;
    } else if(arr[middlePos] > element)     { 
      lastPos = middlePos - 1;
    } else {
      firstPos = middlePos + 1;
    }
  }
  return foundAtIndex;
}


const things = [1,3,5,7,9];
console.log("Found items");
console.log(binarySearch(things, 3));
console.log(binarySearch(things, 7));
console.log(binarySearch(things, 9));
console.log(binarySearch(things, 1));

console.log("Not Found items");
console.log(binarySearch(things, 4));
console.log(binarySearch(things, 99));

