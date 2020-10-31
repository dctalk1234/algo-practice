function deadFish( data ){
    let currentNum = 0;
    let collection = [];
    data.split("").forEach((letter, index) => {
        if(letter ==="i") currentNum++;
        if(letter === "d") currentNum--;
        if(letter === "s") currentNum = currentNum ** 2;
        if(letter === "o") collection.push(currentNum)
    })
    return collection;
}

deadFish("iiisdoso")