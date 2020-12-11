function setup() {
  createCanvas(720, 720);
  strokeWeight(3);
  //noStroke();
  stroke(255, 196, 241);
  //noFill();
  frameRate(1.5);
}

function draw() {
  background(194, 234, 255);
  var windowPane = 60; //padding around the squares 
  var space = 10;
  //space btwn squares 
  var shift = 10;
  //var shift = random(-10,10);

  translate((windowPane + shift) / 2, (windowPane + shift) / 2);

  // loops and variables to make a 10x10 grid   
  //make 10 squares in a row, then repeat that row down the page 

  var num = 10; //number of boxes in my array
  var sideLen = (720 - 2 * windowPane) / num;

  for (var x = 0; x <
    num * sideLen; x = x + sideLen) {
    for (var y = 0; y < num * sideLen; y = y + sideLen) {
      fill(random(200, 255), random(0, 255), random(200, 255), random(100, 255));
      
      triangle(x + random(-shift, shift), y + random(-shift, shift), x + sideLen + random(-shift, shift) - space, y + random(-shift, shift), x + sideLen + random(-shift, shift) - space, y + sideLen + random(-shift, shift) - space); 

     //translate(100,100)
    //  ellipse(0,0,100,100)
     // ;  
      //translate(100,100);

    }
      noLoop();

  }
// triangle(x + random(-shift, shift), y + random(-shift, shift), x + sideLen + random(-shift, shift) - space, y + random(-shift, shift), x + sideLen + random(-shift, shift) - space, y + sideLen + random(-shift, shift) - space);

 //quad(x + random(-shift, shift), y + random(-shift, shift), x + sideLen + random(-shift, shift) - space, y + random(-shift, shift), x + sideLen + random(-shift, shift) - space, y + sideLen + random(-shift, shift) - space, x + random(-shift, shift), y + sideLen + random(-shift, shift) - space);


  //quad(x + random(-shift, shift), y + random(-shift, shift), x + sideLen + random(-shift, shift), y + random(-shift, shift), x + sideLen + random(-shift, shift), y + sideLen + random(-shift, shift), x + random(-shift, shift), y + sideLen + random(-shift, shift)); 

  //quad(x + shift, y + shift, x + sideLen + shift, y + shift, x + sideLen + shift, y + sideLen + shift, x + shift, y + sideLen + shift); //sq1 

  //quad(x, y, x + sideLen, y, x + sideLen, y + sideLen, x, y + sideLen); //sq1 
  //fill(random(0,255), random(0,255), random(0,255));
  //fill(y, 255-y, 255-x);

  //day one stuff below 
  // quad (0,0,300,0,300,300,0,300); //sq1 
  // fill(194, 255, 213);
  // quad (300,0,600,0,600,300,300,300); //sq2- move x to the right 300 pixels
  // fill(251, 255, 194);
  // quad (0,300,300,300,300,600,0,600); //sq3- move y 300 
  // fill(218, 194, 255);
  // quad (300,300,600,300,600,600,300,600); //sq4- move x and y 300
  // fill (255, 194, 194);

}