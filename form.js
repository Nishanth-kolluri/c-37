class form {
    constructor(){
         this.input = createInput('name')
         this.button = createButton("name")
         this.greeting = createElement('h2')
    }
display(){
    var title = createElement("h2")
    title.html("car racing game");
    title.position(130,0);

    
    this.input.position(130,160);

    
    this.button.position(250,200);


    this.button.mousepressed(function(){
      this.input.hide();
      this.button.hide();
    Player.name = this.input.value();
      playercount = playercount + 1;
      player.index = playercount;
      Player.update();
      Player.updatecount(playercount);
      this.greeting.html("hello hi hi");
      this.greeting.position(200,100);
    })

    }
}













