var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup() {
  createCanvas(displayWidth-10,displayHeight-30);
    angleMode(DEGREES);   
}

function draw(){
    background("black");

    textSize(18);
    fill("orange");
    noStroke();
    text("|", 196,90);

    text("--", 310,205);

    text("--", 80,205);

    text("|", 200,310);

    textSize(30);
    text("-CLOCK-",displayWidth/2,displayHeight/7); 
    
    translate(200,200)
    rotate(-90)

    hr = hour();
    mn = minute();
    sc = second();

    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    push();
    rotate(scAngle);
    stroke("red");
    strokeWeight(2);
    line(0,0,100,0);
    pop()

    push();
    rotate(mnAngle);
    stroke("lime");
    strokeWeight(4);
    line(0,0,85,0);
    pop()

    push();
    rotate(hrAngle);
    stroke("blue");
    strokeWeight(7);
    line(0,0,45,0);
    pop()

    stroke("orange");
    point(0,0)

    strokeWeight(2);
    noFill();
    
    stroke("red");
    arc(0,0,300,300,0,scAngle);
    
    strokeWeight(4);
    stroke("lime");
    arc(0,0,280,280,0,mnAngle);
    
    strokeWeight(7);
    stroke("blue");
    arc(0,0,260,260,0,hrAngle);

    drawSprites();
  
}
