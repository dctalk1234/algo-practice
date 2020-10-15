const substrings = ['aA', 'bB', 'cC', 'dD', 'eE', 'fF', 'gG', 'hH', 'iI', 'jJ', 'kK', 'lL', 'mM', 'nN', 'oO', 'pP', 'qQ', 'rR', 'sS', 'tT', 'uU', 'vV', 'wW', 'xX', 'yY', 'zZ','Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz']

let string
function removePairDuplicate(str) {
    string = str
    for (i = 0; i < substrings.length; i++){
        if (string.includes(substrings[i])){
            console.log(substrings[i])
            let substring = substrings[i]
            string= string.split(substring).join('')
            
        }
        
    }
   return string
}

console.log(removePairDuplicate("abcCkDdppGGa"));
console.log(removePairDuplicate("jHYti"));