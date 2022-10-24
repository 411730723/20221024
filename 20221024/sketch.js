function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw(){
  
  rectMode(CENTER)
  noFill()
  stroke(255)
  strokeWeight(1)
  for(var j=0;j<int(height/(50));j++)
      {
          for(var i=0;i<int(width/(49));i++)
              {
          ellipse(25+(i*100),25+(j*100),50)
          rect(25+(i*100),25+(j*100),50)
          ellipse(50+(i*100),50+(j*100),20)
              }
      }
}
