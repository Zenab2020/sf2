var bg1,bg2,bg3,bg4,bg5,bg7,bg9,bg11,bg15,bg19, jetImg1,player,storyImg;
var gameState=0;
var spaceImg,fighterImg, space,fighter, titleImg,title;
var enemyImg,enemy1;
var playerBulletImg,playerBullet, enemyBulletImg,enemyBullet;
var edges, score=0, playerLife=10, enemyLife=5, heartImg, heart;
var heart1, heart2, heart3, heart4, heart5, heart6, heart7, heart8, heart9, heart10; 

function preload(){
  titleImg=loadImage("Title.jfif");
  spaceImg=loadImage("Title-1.png");
  fighterImg=loadImage("Fighter3.png");
  bg1=loadImage("Background-1.jpg");
  bg2=loadImage("Background-2.jpg");
  bg3=loadImage("Background-3.jpg");
  bg4=loadImage("Background-4.jpg");
  bg5=loadImage("Background-5.jpg");
  bg7=loadImage("Background-7.jfif");
  bg9=loadImage("Background-9.jfif");
  jetImg1=loadImage("Jet-5.png");
  enemyImg=loadImage("Enemy1.png");
  bg11=loadImage("Background-11.jfif");
  bg15=loadImage("Background-15.jpg");
  bg19=loadImage("Background-19.jfif");
  playerBulletImg=loadImage("PlayerBullet.png");
  enemyBulletImg=loadImage("EnemyBullet.png");
  heartImg=loadImage("Heart.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges=createEdgeSprites();
  //createSprite(400, 200, 50, 50);

  title=createSprite(windowWidth/2,200,20,20);
  title.addImage(titleImg);
  title.scale=1.2;
  title.visible=false;

  storyImg=createSprite(1210,340,20,20);
  storyImg.addImage(jetImg1);
  storyImg.scale=0.8;
  storyImg.visible=false;

  player=createSprite(700,560,20,20);
  player.addImage(jetImg1);
  player.scale=0.2;
  player.visible = false;

  enemy1=createSprite(700,60,20,20);
  enemy1.addImage(enemyImg);
  enemy1.scale=0.2;
  enemy1.visible=false;

  heart1=createSprite(windowWidth/2+140,25);
  heart1.addImage(heartImg);
  heart1.scale=0.07;
  heart1.visible=false;
  
  heart2=createSprite(windowWidth/2+176,25);
  heart2.addImage(heartImg);
  heart2.scale=0.07;
  heart2.visible=false;

  heart3=createSprite(windowWidth/2+212,25);
  heart3.addImage(heartImg);
  heart3.scale=0.07;
  heart3.visible=false;

  heart4=createSprite(windowWidth/2+248,25);
  heart4.addImage(heartImg);
  heart4.scale=0.07;
  heart4.visible=false;

  heart5=createSprite(windowWidth/2+284,25);
  heart5.addImage(heartImg);
  heart5.scale=0.07;
  heart5.visible=false;

  heart6=createSprite(windowWidth/2+320,25);
  heart6.addImage(heartImg);
  heart6.scale=0.07;
  heart6.visible=false;

  heart7=createSprite(windowWidth/2+356,25);
  heart7.addImage(heartImg);
  heart7.scale=0.07;
  heart7.visible=false;

  heart8=createSprite(windowWidth/2+392,25);
  heart8.addImage(heartImg);
  heart8.scale=0.07;
  heart8.visible=false;

  heart9=createSprite(windowWidth/2+428,25);
  heart9.addImage(heartImg);
  heart9.scale=0.07;
  heart9.visible=false;

  heart10=createSprite(windowWidth/2+464,25);
  heart10.addImage(heartImg);
  heart10.scale=0.07;
  heart10.visible=false;

  playerBulletgroup = new Group()
  enemyBulletgroup = new Group()

  
}

function draw() {
  background(bg15);

  if(gameState===0){
    fill("red");
    title.visible=true;
    //space=createSprite(windowWidth/2-120,50,20,20);
    //space.addImage(spaceImg);
    //space.scale=1.7;
    //fighter=createSprite(windowWidth/2+110,150,20,20);
    //fighter.addImage(fighterImg);
    //fighter.scale=0.9;
    text("Space Fighter",windowWidth/2-100,50,textSize(50));
    text("Use arrow keys to move and space to shoot",windowWidth/2-460,350,textSize(50));
    text("Press 's' to know your story.",windowWidth/2-200,400,textSize(40));
    push();
    text("'Enter' key to start.",windowWidth/2-180,570,textSize(50),fill("yellow"));
    pop();
    //player=createSprite(750,400,20,20);
    //player.addImage(jetImg1);
    //player.scale=0.1;
    if(keyDown("s")){
      background(0);
      //space.visible=false;
      //fighter.visible=false;
      //title.visible=false;
      text("Somewhere on the moon, you are testing out the first Space",10,100);
      text("Jet built for a war in space, or as one must say with ALIENS.",10,150);
      text("Suddenly, out of nowhere a portal appears and an alien army",10,250);
      text("emerges making its way towards Earth.",10,300);
      text("As the High Commander and the only one with a Space Jet,",10,400);
      text("it is your job to stop the invasion.",10,450);
      fill("blue");
      text("GOOD LUCK!!!",365,580,textSize(100));
      storyImg.visible=true;
      title.visible=false;
    }
    else{
      storyImg.visible=false;
    }
    if(keyDown("enter")){
      gameState=1;
    }   
  }else{
    title.visible=false;
  }

    if(gameState===1){
      player.visible = true;
      enemy1.visible=true;
      text("Score:"+score,windowWidth/2-170,30,textSize(30));
      text("Life:",windowWidth/2+60,30,textSize(30));
      heart1.visible=true;
      heart2.visible=true;
      heart3.visible=true;
      heart4.visible=true;
      heart5.visible=true;
      heart6.visible=true;
      heart7.visible=true;
      heart8.visible=true;
      heart9.visible=true;
      heart10.visible=true;
    if(keyDown("RIGHT_ARROW")){
      player.x=player.x+20;
    }
    if(keyDown("LEFT_ARROW")){
      player.x=player.x-20;
    }
    if(frameCount%50===0){
      enemy1.velocityX=random(-20,20);
    }
    player.collide(edges[1]);
    player.collide(edges[0]);
    enemy1.collide(edges[1]);
    enemy1.collide(edges[0]);

   

    if(keyDown("space") && frameCount%5===0){
      playerBullet.visible=true;
      playerBullet.velocityY=-30;
    }
    console.log("playerBulletgroup.isTouching(enemy1):"+playerBulletgroup.isTouching(enemy1))
    if(playerBulletgroup.isTouching(enemy1)){
      enemyLife=enemyLife-1;
      score=score+10;
    }
    if(frameCount%10===0){
      enemyBullet.visible=true;
      enemyBullet.velocityY=30;
    }
    console.log("enemyBulletgroup.isTouching(player): "+enemyBulletgroup.isTouching(player))
    if(enemyBulletgroup.isTouching(player)){
      playerLife--;
      heart10.visible=false;
    }
    if(enemyLife===0){
      enemyLife.visible=false;
      gameState=gameState+1;
    }
    createPlayerBullet()
    createEnemyBullet()
  }

  drawSprites();
}


function createPlayerBullet(){

  playerBullet=createSprite(player.x,player.y-60,10,10);
  playerBullet.addImage(playerBulletImg);
  playerBullet.scale=0.1;
  playerBullet.visible=false;
  playerBullet.lifetime=30;
  playerBulletgroup.add(playerBullet)
}


function createEnemyBullet(){

  enemyBullet=createSprite(enemy1.x,enemy1.y+50,10,10);
  enemyBullet.addImage(enemyBulletImg);
  enemyBullet.scale=0.1;
  enemyBullet.visible=false;
  enemyBullet.lifetime=30;
  enemyBulletgroup.add(enemyBullet)
}