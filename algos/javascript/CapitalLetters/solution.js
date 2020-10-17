function fix(paragraph) {

    paragraph = paragraph.split(". ")
    console.log(paragraph)

    for(let i = 0; i < paragraph.length; i += 1) {
        paragraph[i] = paragraph[i][0].toUpperCase() + paragraph[i].slice(1)
    }

 return paragraph.join(". ")

}

console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))
