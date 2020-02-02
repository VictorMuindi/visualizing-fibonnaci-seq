function setup(){
  createCanvas(640, 480);
  background(0);
}

function draw(){
  //this function gives the fibonnaci value given the position
  function fibonnaci(number){

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++){
      next = previous_first + previous_second;
      previous_first = previous_second;
      previous_second = next;
    }

    return next;
  }


  stroke(255);
  var i = 0;

  var x1 = 5;
  var y1 = 5;

  while(i < 1000){
    stroke(255);

    //line(x1, fibonnaci(x1), fibonnaci(y1), y1);
    translate(x1, y1);
    translate(p5.Vector.fromAngle(millis() / 1000, 40));
    ellipse(y1, x1, fibonnaci(x1), fibonnaci(y1));
    noFill();
    x1 = x1 + 1;
    y1 = y1 + 1;

    i = i + 1;
  }

  //ellipse(fibonnaci(10), fibonnaci(15), 80,80);
}
