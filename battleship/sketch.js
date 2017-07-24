var x = 0; 
var y = 0;

function setup() {
  createCanvas(800, 800);
  background(153);
  makeRow()
}

function makeRow(){
    for( var i=0; i<8; i++){
        rect (x, 0, 100, 100);
         x+=100
    }
}

function draw(){
   for(var i=0; i<8; i++){
        makeRow()
        y+=100
   }
}
