function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  }
  
  function draw() {
   
    rectMode(CENTER)//設定方框的座標點為中心點
    noFill()//不充滿顏色
    //stroke(255)
   
    background(0)
    for(var j=0;j<int(height/(49));j++)
  {
    for(var i=0;i<int(width/(48));i++)
        {
  stroke(255,0,0)
  ellipse(25+(i*90),25+(j*90),50+(mouseX+mouseY)/40)
  stroke(255,255,0)
    rect(25+(i*90),25+(j*90),50+(mouseX+mouseY)/40)
  stroke(0,0,255)
    ellipse(50+(i*90),50+(j*90),20+(mouseX+mouseY)/40)
     }
   }
  }
  