function palindrome(str) {
    var regex = /[a-zA-Z0-9]/gi;
    const lettersOnly= str.match(regex);
    var arrayOne = [];
    var arrayTwo = [];
    for(var i = 0; i < lettersOnly.length; i++){
    arrayOne.push(lettersOnly[i])
    };
    for(var j = lettersOnly.length -1; j >= 0; j--){
      arrayTwo.push(lettersOnly[j])
    };
    var stringOne= arrayOne.toString();
    var lowerOne= stringOne.toLowerCase();
    var stringTwo = arrayTwo.toString();
    var lowerTwo = stringTwo.toLowerCase();
    if (lowerOne === lowerTwo){
      document.getElementById("answer").innerHTML= 'True'
    } else {document.getElementById("answer").innerHTML = 'False'}
    }