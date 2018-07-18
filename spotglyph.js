function SpotGlyph() {
  this.spot_hue = 289;

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
   *
   * this glyph can utilize changes in brightness and saturation, but only
   * using the spot_hue set above. So:
   *
   *    + hue will always be set to spot_hue (a value from 0-360)
   *    + saturation can vary from 0-100
   *    + brighness can vary from 0-100
   *
   * examples:
   *    - fill(this.spot_hue, 25, 50);     // desaturated. middle brightness.
   *    - stroke(this.spot_hue, 100, 100); // fully saturated and maximum brightness
   */
 

  this.draw = function(values, size) {

    var hue = values[0];
    var sat = values[1];
    var bright = values[2];

    //brightness using map function to change colour of the background circle
    //goes between black to white with greys
    var colorB = map(values[2], 0, 100, 20, 100)
    stroke(colorB);
    //fill(colorB);
    fill(this.spot_hue, sat, bright);
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
    //stroke(0);
    stroke(this.spot_hue, 0, bright)
    strokeWeight(strokeSize);

    //hue
    //fill(255);
    fill(this.spot_hue, sat, bright);
    var ellipseSize = map(values[0], 0, 360, s2/1.8, s2/6);
    translate(s2, s2);

    //for loop to make the inner ellipses
    for (var i = 0; i < 10; i ++) {
      ellipse(ellipseSize, ellipseSize, s3);
      rotate(PI/5);
    }
  }  
}
