class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state){

    database.ref("/").update({
    gameState:state
    });
    
    
    }
    

  start() {
    player = new Player();
    playerCount = player.getCount();


    form = new Form();
    form.display();

      

          
         

         textAlign(CENTER);
        background(255);
          sel = createSelect();
         sel.position(630, 400);
          sel.option('BENZ');
         sel.option('FERARRI');
         sel.option('MINI COOPER');
         sel.selected('BMW');
         sel.option('PORSCHE')
         sel.option('GTR');

car2 = createSprite(width/2- 100, height - 80);
car2.addImage("car1",car1Img);
car2.scale=0.30;

car3 = createSprite(width/ 2 + 100, height - 80);
car3.addImage("car3",car2Img);
car3.scale=0.20;

//car4 = createSprite(width/2+25,height-80);
//car4.addImage("car4",car4Img);
//car4.scale=0.30;




cars=[car2,car3];
  
  }

  handleElements() {
    form.hide();
  
    
  }

 

    play() {


      this.handleElements();

    

      Player.getPlayersInfo();

      if (allPlayers !== undefined) {

        //image(track, 90, -height * 5, width-1, height * 6);

         image(track, 7, -height * 3, width, height * 6);



       // image(tire,7, width/2-400 ,height-100);

       // tire.scale =0.01


      var index = 0;
      for ( var  plr in allPlayers) {
     
        index = index + 1;

       
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;
     

if(index===player.index){


  stroke(10);
  
  ellipse(x,y,60,60);

 
camera.position.y = cars[index-1].position.y;

}


      }
      this.handlePlayerControls();

      
      drawSprites();
      }
    }      

    handlePlayerControls() {
   

      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }
    }
  

}
