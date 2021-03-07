var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1,car2,car3,car4;
var cars;

var track;
var c1,c2,c3,c4;

function preload(){
  c1 = loadImage("images/c1.png");
  c2 = loadImage("images/c2.png");
  c3 = loadImage("images/c3.png");
  c4 = loadImage("images/c4.png");

  track = loadImage("images/track.jpg");

  sound = loadSound("car+speed+01.mp3");
}


function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-70);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  
}
