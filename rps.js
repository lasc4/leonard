var playerchoice = "r"
var cpuchoice = "s"

if (playerchoice == "r" && cpuchoice == "p") {
console.log ("cpu wpn because it chose paper.");
}

if (playerchoice == "r" && cpuchoice == "s"){
console.log("you won because you chose rock.");
}

if (playerchoice == cpuchoice){
    console.log("its a draw!");
}

if (playerchoice == "p" && cpuchoice == "s"){
console.log("cpu won because it chose scissors.");
}

if (playerchoice == "p" && cpuchoice == "r"){
console.log("cpuchoice wins because it chose rock");
}

if (playerchoice == "s" && cpuchoice == "r"){
    console.log ("playehoice lost because rock beats paper");
}
if (playerchoice == "p" && cpuchoice == "r"){
    console.log ("playehoice wins because paper beats rock");