var back , gun1 ,gun2 , reset , bullet1 , bullet2 
var backgroundimg , gunpimg ,gunbimg , resetimg , bullet1img , bullet2img , gameOverimg;
var bullet1Group,bullet2Group
var gameState = 1
function preload() {
  backgroundimg = loadImage("assets/download.jpg")
  gunpimg = loadImage("assets/gun1.png")
  gunbimg  = loadImage("assets/gun2.png")
  bullet1img = loadImage("assets/bullet1.png")
  bullet2img = loadImage("assets/bullet2.png")
  resetimg = loadImage("assets/reset.png")
  gameOverimg = loadImage("assets/gameOver.png")
}
//BP
function setup() {

  createCanvas(displayWidth,displayHeight)

  gun1 = createSprite(width/2-550,100)
  gun1.addImage(gunpimg)
  gun1.scale = 0.2

  gun2 = createSprite(width/2+550,100)
  gun2.addImage(gunbimg)
  gun2.scale = 0.2
 
  bullet1Group = new Group()
  bullet2Group = new Group()

}

//BP
function draw() {
  background(0)
  image(backgroundimg,0,0,width,height)



  if(gameState === 1){

    if(keyDown(38)){
      gun2.position.y -= 5
    }  
    if(keyDown(40)){
      gun2.position.y +=5
      console.log("hi")
    } 
  
    if(keyDown(83)){
      gun1.position.y += 5
    }  
    if(keyDown(87)){
      gun1.position.y -=5
      console.log("hi")
    } 

    BulletMain()

    if(bullet1Group.isTouching(gun2)){
      gameState = 2
      bullet1Group.destroyEach()
    }
    if(bullet2Group.isTouching(gun1)){
      gameState = 2
      bullet2Group.destroyEach()
    }

  }

  else if (gameState === 2){
    gameOver()

  } 
  
 


  
 drawSprites()
}
function BulletMain(){
  if(keyDown(16)){
    bullet1 = createSprite(gun1.position.x,gun1.position.y,5,5)
    bullet1.addImage(bullet1img)
    bullet1.scale = 0.2
    bullet1.posX = 5
    bullet1.setVelocity(5,0)
    bullet1Group.add(bullet1)
    
  }
  if(keyDown(13)){
    bullet2 = createSprite(gun2.position.x,gun2.position.y,5,5)
    bullet2.addImage(bullet2img)
    bullet2.scale = 0.2
    bullet2.posX = 5
    bullet2.setVelocity(-5,0)
    bullet2Group.add(bullet2)
  }
 
  
}
function gameOver(){
  swal({
    title: `Game Over`,
    text: "Oops you lost the race....!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  });
}


