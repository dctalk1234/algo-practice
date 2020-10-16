let arr = [ 42, 86, 139, 7, 126, 4, 132, 49, 71, 41, 48, 70, -22, 71, 89 ]

function sumOrProduct(array, n) {
  const reducerAdd = (accumulator, current) => accumulator + current
  const reducerMultiply = (accumulator, current) => accumulator * current
  
  console.log('array', array, n)
  
  let arrMin = [...array]
  let arrMax = [...array]
  
  let sumArr = []
  let productArr = []
  
  
  for (let i = 0; i < n; i ++){
    let highest = Math.max(...arrMax)
    let lowest = Math.min(...arrMin)
    sumArr.push(highest)
    productArr.push(lowest)
    arrMax.splice(arrMax.indexOf(highest), 1)
    arrMin.splice(arrMin.indexOf(lowest), 1)
    console.log('max', arrMax)
  }
  
  console.log(sumArr)
  console.log(productArr)
  
  
  
  if(productArr.reduce(reducerMultiply) > sumArr.reduce(reducerAdd)){
    return 'product'
  } else if(sumArr.reduce(reducerAdd) > productArr.reduce(reducerMultiply)){
    return 'sum'
  } else if(productArr.reduce(reducerMultiply) === sumArr.reduce(reducerAdd)){
    return 'same'
  }
  
}
console.log(sumOrProduct(arr, 9))