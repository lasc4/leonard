function setup(){

createCanvas(600,600);
}
var x = 0;
function draw(){
   background(225);
    ellipse(x, 50, 60, 60)
x++;
}

var xCoord = 25, yCoord = 25; 
var randNum1 = (Math.random() * 15);
var randNum2 = (Math.random() * 15);
var temp

var colorList = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "brown", "white"];

function draw() {
    background("black");

  xCoord = xCoord + randNum1;
    yCoord = yCoord + randNum2;  

  // Right side
    if (xCoord >= width - 25) {
        fill(colorList[Math.round(Math.random() * 10)]);
        // Bottom right corner
        if (yCoord >= height - 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;
        }
        // Top right corner
        else if (yCoord <= 25) {
            temp = randNum1;
            randNum1 = randNum2;
            randNum2 = temp;      
      }
        // Non-corners
        else {
            randNum1 = randNum1 * -1;
        }
    }
    // Left side
    else if (xCoord <= 25) {
        fill(colorList[Math.round(Math.random() * 10)]);
        // Bottom left corner
        if (yCoord >= height - 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;                  
      }
        // Top left corner
        else if (yCoord <= 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;            
       }
        // Non-corners
        else {
            randNum1 = randNum1 * -1;
        }
    }
    // Bottom side
    else if (yCoord >= height - 25) {
        fill(colorList[Math.round(Math.random() * 10)]);
        // Bottom right corner
        if (xCoord >= width - 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;            
      }
        // Bottom left corner
        else if (xCoord <= 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;          
      }
        // Non-corners
        else {
            randNum2 = randNum2 * -1;
        }
    }
    // Top side
    else if (yCoord <= 25){
        fill(colorList[Math.round(Math.random() * 10)]);
        // Top right corner
        if (xCoord >= width - 25) {
            temp = randNum1;
            randNum1 = randNum2;
            randNum2 = temp;  
      }
        // Top left corner
        else if (xCoord <= 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;            
       }
        // Non-corners
        else {
            randNum2 = randNum2 * -1;
        }
    }
      
  ellipse(xCoord, yCoord, 50, 50);

}

function keyPressed() {
    loop();
}

