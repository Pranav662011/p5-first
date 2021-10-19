function preload(){

}

function setup(){
    canvas=createCanvas(650,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";

}

function draw(){
    image(video,250,150,250,250);
    fill(0,120,0);
    rect(80,40,25,400);
    rect(580,40,25,400);
    rect(80,40,500,25);
    rect(80,415,500,25);
    fill(250,0,0);
    circle(90,50,100);
    circle(590,50,100);
    circle(90,430,100);
    circle(590,430,100);
    
    
}

function take_snapshot(){
    save("P5 intro.png");
}

