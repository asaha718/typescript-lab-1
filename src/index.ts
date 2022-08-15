function prepend(numSpaces: number, inputString: string) {
  let spaces: string= ""; 
  
  for(let i=0; i< numSpaces; i++){ 
    spaces += " "
  }
  
  return spaces + inputString
}

console.log(prepend(3, "Hello World"))