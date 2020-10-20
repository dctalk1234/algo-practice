
/**
 * @param {str} // a string of DNA
 * @return {str} // a string of the DNA's counterpart
 */

 // INPUT:
// "ATTGC"

// OUTPUT:
// => "TAACG"

// for...loop + if/else
// const dnaStrings = (str) => {
//   let dna = '';
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === 'A') { dna += 'T'; }
//     else if(str[i] === 'T') { dna += 'A'; }
//     else if(str[i] === 'C') { dna += 'G'; }
//     else if(str[i] === 'G') {dna += 'C' }
//   }
//   return dna;
// }


// for...loop + switch
// const dnaStrings = (str) => {
//   let dna = '';
//   for(let i = 0; i < str.length; i++) {
//     switch(true) {
//       case str[i] === 'A':
//         dna += 'T';
//         break;
//       case str[i] === 'T':
//       dna += 'A';
//       break;
//       case str[i] === 'C':
//       dna += 'G';
//       break;
//       case str[i] === 'G':
//       dna += 'C';
//       break;
//     }
//   }
//   return dna;
// }

// .map() + Objects
// const dnaStrings = (str) => {
//   let dna = '';
//   const dnaMap = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
//   const inputStrArr = str.split("");
//   const dnaArr = inputStrArr.map (ch => {
//     return dnaMap[ch];
//   })
//   return dnaArr.join("");
// }

// BONUS .split() + .map() + .splice()
// const dnaStrings = (str) => {
//   let dna = '';
//   const dnaMap = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
//   const inputStrArr = str.split("");
//   const dnaArr = inputStrArr.map ((ch, index) => {
//     return inputStrArr.splice(index,1, dnaMap[ch]);
//   })
//   return inputStrArr.join("");
// }

// BONUS: forEach + switch
// const dnaStrings = (str) => {
//   let dna = '';
//   const inputStrArr = str.split("");
//   inputStrArr.forEach(ch => {
//     switch(true) {
//       case ch === 'A':
//         dna += 'T';
//         break;
//       case ch === 'T':
//       dna += 'A';
//       break;
//       case ch === 'C':
//       dna += 'G';
//       break;
//       case ch === 'G':
//       dna += 'C';
//       break;
//     }
//   })
//   return dna;
// }

// Recursion
const dnaStrings = (str, i = 0) => {

  if(i === str.length) { return ''; }
  let dna = '';
  if(str[i] === 'A') { dna += 'T'; }
  else if(str[i] === 'T') { dna += 'A'; }
  else if(str[i] === 'C') { dna += 'G'; }
  else if(str[i] === 'G') {dna += 'C' }

  return dna + dnaStrings(str, i + 1);
}


const testStr = ["AGG", "ATCG", "TCGA","ATTGC", "TAACG"];
testStr.forEach(str => 
  console.log(dnaStrings(str))
);