//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImage, happyDogImage;
var database;

function preload()
{
    //load images here
    dogImage = loadImage("images/dogImg.png");
    happyDogImage = loadImage("images/dogImg1.png");
    
}

function setup() {
  database = firebase.database();
  console.log(database);
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);

  createCanvas(500, 500);
  
  var dog = createSprite(300,400,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    happyDog.addImage(happyDogImage);
  }

  drawSprites();
  //add styles here
  text("Note: Press UP_ARROW Key To Feed Drago Milk!");
  textSize(25);
  fill(252,252,252);
  stroke(4);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref("/").update({
    Food:x
  })
}
