1.what codes draw the blades of grass? 
line(x, height-10, x+random(-10, 10), height-10-random(h))
2.what code makes the "lawnowner" come by? How often does it comes by? 
if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  1/1000 the lawnmower will come by
3.the variable h is the initial height of the grass
4.because the height of land is 10, so the y of the start point or the end point need minus 10
