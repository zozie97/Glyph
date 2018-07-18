/*
 * val4 is an array of 3 numbers that range from [0,1000]
 * size is the number of pixels for width and height
 * use p5.js to draw a round grawscale glpyh within the bounding box
 */ 
function gray_glyph(values, size) {
 
rectMode(CENTER);
   
var hue = values[0];
var v = map(hue, 0, 360, 0, 255);
fill(v);
var s2 = size/2;
ellipse(s2, s2, size, size);

// inner size is set to 30%
  var inner_size = 0.2 + 0.4 * 0.3;
  var s3 = size * inner_size;

  var shift_frac = (values[2] - 180.0) / 180.0;
  var max_shift = 0.5 * (size - s3);
  var x_shift = shift_frac * max_shift; 


  var sat = values[1];
  var v1 = map(sat, 0, 360, 255, 0);
  fill(v1);

  
//scale(1.2);

  rect(s2 + x_shift, s2, s3, s3);

  var s4 = s2/2;

  rect(s2 + x_shift, s2, s4, s4);
}
