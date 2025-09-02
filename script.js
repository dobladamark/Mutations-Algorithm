function mutation(arr) {
  
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();


  for (let char of second) {
    if (first.indexOf(char) === -1) {
      return false; 
    }
  }

  return true; 
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));   
console.log(mutation(["Alien", "line"]));  

