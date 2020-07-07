var canvas,backgroundImg;
var gamestate = 0;
var playerCount,allPlayers;
var database;
var form,player,game;
var car1,car2,car3,car4,cars;
var car1Image,car2Image,car3Image,car4Image,trackImage;

function preload(){

}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    database = firebase.database();
   /* game = new Game();
    game.getState();
    game.start();*/
}

function draw(){
   /* if(playerCount === 4){
        game.update(1);
    }
    if(gamestate === 1){
        clear();
        game.play();
    }
    if(gamestate===2){
        game.end();
    }*/
}