var ground, groundimage
var invisibleground
var cloud,cloudimage
var trex ,trex_running;
function preload(){
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimage = loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
}

function setup(){
    createCanvas(600,200)
    
    //create a trex sprite
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5

  ground = createSprite(200,175,400,10)
  ground.velocityX = -4
  ground.addImage(groundimage)
invisibleground = createSprite(200, 180, 400, 10)
invisibleground.visible = false
  
}

function draw(){
    background(0)
  if(keyDown("space")&&trex.y>=150){
    trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY + 0.5
  if(ground.x<30){
    ground.x = 200   
  }

spawnclouds()
  trex.collide(invisibleground);
    drawSprites()
  

}
 function spawnclouds(){
  if(frameCount%60===0){
  cloud = createSprite(600,30,20,10)
  cloud.velocityX = -4
  cloud.y=Math.round(random(10,40))
  cloud.addImage(cloudimage);
  cloud.scale=0.5
 }
}
