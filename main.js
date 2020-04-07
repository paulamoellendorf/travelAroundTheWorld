let number = 0;
let xCord = 0;
let yCord = 0;
let countryName;
let img;
let W = 1252; 
let H = 588;
let canvas;
let game= new Game();




function preload(){
    img = loadImage(
        "map.png"
      );
      game.init();
}


function setup(){

    createCanvas(W, H);

}

function draw(){
clear();
    image(img, xCord, yCord, W, H);
    game.draw();
}

function mousePressed(){
    for(let i=0; i<game.countryList.length;i++){
        game.countryList[i].clicked();
    }
}

//function mouseClicked(){
 //console.log(mouseX,mouseY)
//}
