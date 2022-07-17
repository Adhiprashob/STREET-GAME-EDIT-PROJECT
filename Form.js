class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.greeting = createElement("h2");

    }
  
    setElementsPosition() {
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
     
    }


    setElementsStyle() {
         this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
  
      }

      hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      
      }

      mousePressed(){

        this.playButton.mousePressed( ()=>{
          this.input.hide();
          this.playButton.hide();
          var message= `
          Hello ${this.input.value()}
          </br>waiting for another player to join...`;
          this.greeting.html(message);
          playerCount += 1;
          player.name = this.input.value();
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);
          


        
         // let sel;

          
         

        //  textAlign(CENTER);
          //background(255);
         // sel = createSelect();
        //  sel.position(630, 400);
        //  sel.option('BENZ');
          //sel.option('FERARRI');
         // sel.option('BUGGATI');
         // sel.selected('BMW');
        //  sel.option('PORSCHE')
         // sel.option('GTR');







        });


      }


     

  
      display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.mousePressed();

      }
    
}  