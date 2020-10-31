function findShort(s){
    let compare; 
    let solution = [];
    
    s = [...s.split(" ")]
    
    compare = s[s.length-1]
    
    s.forEach(word => {
      word.length <= compare.length ? compare = word : " ";
    })
    return compare.length
}

// refactored using Math.min

// function findShort(s){
//     return s = Math.min(...[...s.split(" ")].map(word => word.length))
// }