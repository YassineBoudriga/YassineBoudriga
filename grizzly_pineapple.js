let pg;
let h1;
let h2;
let r=40;
let rnds =[];
let img;
let imgs =[];
let ind=0;
let img_c=9;
function preload(){
  for(let i=0;i<img_c;i++){
    path = 'data/' +str(i+1)+'.jpg'
    loaded_image=loadImage(path);
    loaded_image.resize(10,10);
    imgs.push(loaded_image);
    }
  
}
function setup() {
  createCanvas(1000, 700);
  pg = createGraphics(2*r, 2*r);
  h1 = createGraphics(width/2, height);
  h2 = createGraphics(width/2, height);
  translate(width/2,height/2);
  
  for(let i=0;i<8;i++){
    rnds.push(random(0.2,1));
    }
  
}

function draw() {
  background(255);
  noFill();
  stroke("#04e710");
  h1.background(255);
  
  h1.image(imgs[ind],0,0);
  image(h1,0,0);
  image(h2,width/2,0);
  push();
  beginShape();
  translate(constrain(int(mouseX),0,width/2),int(mouseY));
  for(let i=0;i<8;i++){

    

    vertex(rnds[i]*r*cos(i*TWO_PI/8),rnds[i]*r*sin(i*TWO_PI/8));

    }
  endShape(CLOSE);
  beginShape();

  translate(width/2,0);

  for(let i=0;i<8;i++){



    



    vertex(rnds[i]*r*cos(i*TWO_PI/8),rnds[i]*r*sin(i*TWO_PI/8));



    }

  endShape(CLOSE);
  beginShape();
  pop();
  
}
function mouseClicked(){
  
  pg.erase();
  pg.rect(0,0,pg.width,pg.height);
  pg.noErase();
  
  pg.fill('rgba(0, 0, 0, 1)');
  pg.push();
  pg.translate(pg.width/2,pg.height/2);
  pg.beginShape();
  for(var i=0;i<8;i++){



    



    pg.vertex(rnds[i]*r*cos(i*TWO_PI/8),rnds[i]*r*sin(i*TWO_PI/8));



    }

  pg.endShape(CLOSE);
  pg.pop();
  masked=createImage(100,100);
  masked.copy(h1,int(mouseX)-50,int(mouseY)-50,2*r,2*r,0,0,2*r,2*r);
  masked.mask(pg);
  h2.imageMode(CENTER);
  h2.image(masked,int(mouseX),int(mouseY));
  for(let i=0;i<8;i++){

    rnds[i]=(random(0.4,1));

    }
  r=int(random(35,100));
    
  
}
function keyPressed() {
 
  if (keyCode === RIGHT_ARROW) {
    ind=(ind+1)%img_c;
  }
}
