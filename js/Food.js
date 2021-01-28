class Food{
 constructor(){
     this.image=loadImage("images/Milk.png"),
     this.foodStock=0,
     this.lastfed;
 }
updatefoodS(foodStock){
    this.foodStock=foodStock
}

getfedTime(lastfed){
    this.lastfed=lastfed
}

deductFood(){
    if(this.foodStock>0){
    this.foodStock=this.foodStock-1
}
}

getfoodStock(){
    return this.foodStock
}

display(){
    var x= 90,y=250

    imageMode(CENTER)
    image(this.image,550,300,50,50)
    if(this.foodStock!==0){
    for(var i=0; i<this.foodStock; i++){
        if(i%10===0){
        x=90;y=y+50
}
    image(this.image,x,y,50,50)
    x=x+40
}
}
}
}