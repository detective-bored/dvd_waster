let font,
  fontsize = 40;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  // font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  run = 0;
  xa = 2;
  ya = 1;
  xd = width/2;
  yd = height/2;
  fill(240, 150, 150);
  c = color(240,150,150);
  //the birds work for the government
  /*
  Nightmare
  Nightmare
  Nightmare
  */
  // textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  // console.log('Hello World');
  // console.log('3+6');
  // circle(325,325, 100);
  rectMode(CENTER);
  noStroke();
  xd = xd + xa;
  yd = yd + ya;
  textSize(fontsize);
  fill(c);
  textStyle(BOLDITALIC);
  text('DVD',xd,yd);
  ellipse(xd, yd + 20, 80, 20);
  textSize(fontsize - 20);
  fill('black');
  textStyle(BOLD);
  text('VIDEO',xd,yd+22);

  if(xd > windowWidth - 50){
    xa = -xa;
    c = color(20, 150, 150);
    fill(c);

  }
  else if(yd > windowHeight - 40){
    ya = -ya;
    c = color(240,150, 0);
    fill(c);
  }
  else if(xd < 50){
    xa = -xa;
    c = color(240,150,150);
    fill(c);
  }
  else if(yd < 30){
    ya = -ya;
    c = color(240,10,150);
    fill(c);
  }else{
    fill(c);
  }
  
}