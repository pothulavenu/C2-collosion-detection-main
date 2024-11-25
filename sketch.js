var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 100, 50);
  movingrect = createSprite(300,200,50,100);
  
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
   movingrect.x = mouseX;
   movingrect.y = mouseY;
   
   if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 
     && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2
     && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 ){
      movingrect.shapeColor = "yellow";
    } else movingrect.shapeColor = "blue";

  drawSprites();
}