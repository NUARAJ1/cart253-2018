var clownImage;
var clownImageX;
var clownImageY;
var feltTextureImage;
var feltTextureImageX;
var feltTextureImageY;
var simleyImageX; 
var simleyImageY;
//loads the images//
function preload() {
  clownImage = loadImage("assets/images/clown.png");
  feltTextureImage = loadImage("assets/images/black-felt-texture.png");
  simleyImage = loadImage("assets/images/simley.png"); //adds and image of a smiley face//

}

function setup() {
  createCanvas(640,640); //creates a canvas and its size at start//
  clownImageX = width/2;
  clownImageY = height/2;
  feltTextureImageX = width/2;
  feltTextureImageY = 0 - feltTextureImage.height/2;
  imageMode(LEFT); //tells images to start at left of screen//
  simleyImageX = width/2;
  simleyImageY = height/2;
}

function draw() {
  feltTextureImageY += 1;
image(feltTextureImage,feltTextureImageX,feltTextureImageY);
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;
  image(clownImage,clownImageX,clownImageY);
  simleyImageX +=1;
  image(simleyImage,simleyImageX,simleyImageY);
}
