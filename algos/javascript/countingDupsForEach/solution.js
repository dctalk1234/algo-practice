const colorsArr = [
    { colors: ["blue", "purple", "red"] },
    { colors: ["black", "orange", "blue"] },
    { colors: ["green", "red", "blue", "orange", 'green'] }
  ];
  
  let countingDups = (arr) => {
    let countObj = {}
    
    arr.forEach((object) => {
      object.colors.forEach((color) => {
        countObj[color] = countObj[color] === undefined ? 1 : countObj[color] += 1
      })
    })
  
    return countObj;
   }
  
  console.log(countingDups(colorsArr))
  