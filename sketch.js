//Create variables here
var dog_img,dog;
var happydog_img;
var database;
var foodS,foodStock;
var addFood,feed;

function preload(){
  //loading images
  dog_img=loadImage("images/dogImg.png")
  happydog_img=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(800, 500);
  
  database= firebase.database();

  feed= createButton("Feed the Dog");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);

  dog=createSprite(600,300,50,50);
  dog.addImage(dog_img)
  dog.scale=0.1;

  foodObj=new Food()
  
}

function draw() {  
  background(46,139,87);

  foodObj.display();
  
 fedTime=database.ref('FeedTime');
 fedTime.on("value",function(data){
   lastFed=data.val();
 });

  drawSprites();
}

function addFood(){
foodS++
database.ref('/').update({
  Food:foodS
})
}

function feedDog(){
dog.addImage(happydog_img);

foodObj.updatefoodStock(foodObj.getfoodStock()-1);
database.ref('/').update({
  Food:foodObj.getfoodStock(),
  FeedTime:hour()
})
}