void setup(){
    size(600 , 600);
}

var w = 600;
var colorChanger = 255;

void draw(){
    
    stroke(255 - colorChanger , 255 - colorChanger , 255 - colorChanger)
    fill(colorChanger , colorChanger , colorChanger)
    ellipse(300 , 300 , w , w);
    ellipse(51 , 51 , w/6 , w/6);
    ellipse(549 , 549 , w/6 , w/6);
    ellipse(549 , 51 , w/6 , w/6);
    ellipse(51 , 549 , w/6 , w/6);

    fill(255 - colorChanger , 255 - colorChanger , 255 - colorChanger)
    ellipse(300 , 300 ,  600 - w , 600 - w);
    
    if (mousePressed){
        w = w - 2.5;
    }
    if (w == 0){
        w = 600;
    colorChanger = random(255);
    
    }
}
