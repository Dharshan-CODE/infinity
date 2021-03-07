class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(50,200,50,80);
    car1.addImage(c1);
    car2 = createSprite(250,200,50,80);
    car2.addImage(c2);
    car3 = createSprite(450,200,50,80);
    car3.addImage(c3);
    car4 = createSprite(650,200,50,80);
    car4.addImage(c4);

    cars =[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100);
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index = 0;
      var x = 150;
      var y;

      
      for(var plr in allPlayers){
      index+=1;
      x = x+200;
      y = displayHeight-allPlayers[plr].distance;
      cars[index-1].x = x;
      cars[index-1].y = y; 
      //var display_position = 130;
      background("white");
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

        if (index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
         
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=20
      player.update();
      sound.play();
    
    }
   
    if(player.distance>=3700){
      gameState = 2;
      sound.pause();
    }  
    drawSprites();
  }
  end(){
    textSize(24);
    text("GAME END",displayWidth/2,displayHeight/2);
  }
  
}
