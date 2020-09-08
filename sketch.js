
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var seed_weather={
   "sunflower":"sunny",
   "basil": "sunny",
   "tomato":"msunny",
   "calendula" : "cool",
   "marigold":"msunny",
   "lemongrass":"sunny",
   "lavender":"msunny"
 }

var girl;
var GIRL_IMG;
var gameSTATE = 0;
var gametest;
var bubble;
var sample;
var BOOKimage;
var test;
var button;
var readButton;
var gameButton;
var CalendulaButton;
var SunflowerButton;
var TomatoButton;
var LemongrassButton;
var MarigoldButton;
var BasilButton;
var LavenderButton;
var c1,c2,s1,s2,t1,t2,l1,l2,m1,m2,b1,b2,la1,la2;


var engine, world;

function preload(){

backIMG = loadImage("images/BACKGROUND.jpg");

}

function setup() {

   engine = Engine.create();
   world = engine.world;
   Engine.update(engine);
   gametest = new GAME();

   // TO CREATE THE CANVAS
   createCanvas(displayWidth,displayHeight);
 
}

function draw() {
   background("#BFD540"); 
  
   // GAMESTATE 0
   if(gameSTATE === 0){
     background(backIMG);
     gametest.story();

   }

   //GAMESTATE 1
   if(gameSTATE === 1){
     gametest.rules(); 
   }

   // GAMESTATE 2
      if(gameSTATE === 2){
        gametest.firstpage();
      }

   // GAMESTATE 3
      if(gameSTATE === 3){
        gametest.demo();
      }

  // BOOK STATES
      if(gameSTATE === 21){
        gametest.calendula();
      }

      else if(gameSTATE === 22){
        gametest.sunflower();
      }

      else if(gameSTATE === 23){
        gametest.tomato();
      }

      else if(gameSTATE === 24){
        gametest.lemongrass();
      }

      else if(gameSTATE === 25){
        gametest.marigold();
      }

      else if(gameSTATE === 26){
        gametest.basil();
      }

      else if (gameSTATE === 27){
        gametest.lavender();
      }

      if(gameSTATE === 31){
        gametest.gameCAL();
      }
      else if (gameSTATE === 32){
        gametest.gameSUN(seed_weather.sunflower);
      }
      else if(gameSTATE === 33){
        gametest.gameTOM();
      }
      else if(gameSTATE === 34){
        gametest.gameLEM();
      }
      else if(gameSTATE === 35){
        gametest.gameMAR();
      }
      else if(gameSTATE === 36){
        gametest.gameBAS();
      }
      else if(gameSTATE === 37){
        gametest.gameLAV();
      }

}