function descendingOrder(n) {
    // turn the number input in string in a new array
    let arr = n.toString().split('')
    let numArr = []

    for (let i = 0; i < arr.length; i++){
        numArr.push(parseInt(arr[i]));
    }

    let sorted = numArr.sort(function(a, b){return b-a})
    
    return parseInt(sorted.join(''))
}

console.log(descendingOrder(23597236))
