function removeBMW(str){
    //TO DO
    if (typeof str !== 'string'){
      throw new Error("This program only works for text.")
    }
    let arr = str.split('')
    for (let i = 0; i < str.length; i++){
      if (str[i] === 'b' || str[i] === 'B' || str[i] === 'm' || str[i] === 'M' || str[i] === 'w' || str[i] === 'W'){
        arr.splice(arr.indexOf(str[i]), 1)
      } 
    }
    console.log(arr.join(''))
    return arr.join('')
  }