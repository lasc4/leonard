function setup(){

createCanvas(600,600);
ellipse(x, 50, 60, 60);
}
var x = 0;
function draw(){
   background(225);
    ellipse(x, 50, 60, 60)
x++;
textSize(25);
textAlign(RIGHT);
text("Please type sentence below", 410, 20);
textAlign(CENTER);
text("Send a bolt of lighting", 260, 200);
textAlign(LEFT);
text("current points:0", 190, 400);

}