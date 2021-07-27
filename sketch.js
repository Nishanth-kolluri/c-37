var b1;
var database;
var gamestate=0;
var playercount,Form,Game,Player;
var allplayers;

function setup(){
    database = firebase.database();
    createCanvas(400,400);
    Game = new game();
    Game.getstate();
    Game.start();
}

function draw(){
    background("white");
    if(playercount === 4){
        Game.update(1);
        
    }
    if(gamestate === 1){
       game.play ();
    }
    drawSprites();

}


