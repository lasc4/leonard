

function randLetter(num){
   var alphabet = ["a", "b", "c", "d","f", "g", "h", "j", "k", "l", "w", "e", "r", "t", "y", "u", "i", "o", "z", "c", "v", "b", "n", "m"];
    var randomNumber = Math.floor(Math.random() * alphabet - 1);

var randomLetter = alphabet[randomNumber];
return randomLetter;


}

randword(); 

function randWord(){
var randomLength = Math.random(25);
var randomLetter = randLetter();

for ( var i=0; i<randomLength; i++){
    var randomLetter = RandomLetter();
console.log(randLetter);
}


}