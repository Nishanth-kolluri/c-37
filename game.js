class game {
    constructor(){

    }
getstate(){
    var gamestateref = database.ref("gamestate");
    gamestateref.on("value",function(data){
     gamestate = data.val();
    });
}

update(state){
   database.ref("/").update({
       gamestate:state
   })
}

start(){
  if(gamestate === 0) {
     Player = new player();
     Player.getcount();
     Form = new form();
     Form.display();
  }
}  

play(){
    form.hide(); 
    textSize(15);
    text('gamestart',120,100);
    player.getplayerinfo();
    if(allplayers != undefined){
      var displayposition = 130;
      displayposition = displayposition + 20;
      textSize(15);
      text(allplayers[plr].name + ':' + allplayers[plr].distance,120,displayposition);
    }
 
  if(keyIsDown(UP_ARROW) && Player.index !== null){
    Player.distance = Player.distance + 30;
    Player.update()
  }
}
}





















