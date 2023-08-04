function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}


const numbersWithDuplicates = [1, 2, 3, 3, 4, 4, 5];
console.log(removeDuplicates(numbersWithDuplicates)); 
