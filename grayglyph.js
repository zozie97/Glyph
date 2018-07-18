function GrayGlyph() {
  /*
   * values is an array of 3 numbers: [hue, saturation, brightness]
   *   + hue ranges from 0..360
   *   + saturation ranges from 0..100
   *   + brightness ranges from 0..100
   * this matches the default range for p5.js colorMode(HSB) as describe at:
   *   https://p5js.org/reference/#/p5/colorMode
   *
   * size is the number of pixels for width and height
   *
   * use p5.js to draw a round grayscale glpyh
   * the glyph should stay within the bounding box [0, 0, width, height]
   * this is a grayscale glyph, so only brighness can be adjusted.
   * the range for brighness is 0..100
   *
   * the color mode will be HSB, so you can either:
   *    + use a one argument grayscale call; this is easiest. examples:
   *       - fill(50);    // ranges from 0-100
   *       - stroke(100); // white
   *    + use a three arguement HSB call with values but set both H and S to 0. examples:
   *       - fill(0, 0, 51);    // equivalent to above
   *       - stroke(0, 0, 100); //
   */ 

   angleMode(RADIANS);

  this.draw = function(values, size) {

    //brightness using map function to change colour of the background circle
    //goes between black to white with greys
    var colorB = map(values[2], 0, 100, 20, 100)
    stroke(colorB);
    fill(colorB);
    var s2 = size/2;
    strokeWeight(1);
    ellipse(s2, s2, size);

    // inner size is set to 30%
    //code is from the lectures for this section of inner size
    var inner_size = 0.2 + 0.4 * 0.3;
    var s3 = size * inner_size/2;

    //saturation
    fill(255);
    var strokeSize = map(values[1], 0, 100, 4.5, 0.5);
    stroke(0);
    strokeWeight(strokeSize);

    //hue
    fill(255);
    var ellipseSize = map(values[0], 0, 360, s2/1.8, s2/6);
    translate(s2, s2);

    //for loop to make the inner ellipses
    for (var i = 0; i < 10; i ++) {
      ellipse(ellipseSize, ellipseSize, s3);
      rotate(PI/5);
    }
  }  
}
