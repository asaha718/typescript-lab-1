function prepend(numSpaces, inputString) {
    var spaces = "";
    for (var i = 0; i < numSpaces; i++) {
        spaces += " ";
    }
    return spaces + inputString;
}
console.log(prepend(3, "Hello World"));
