let polygonConfig = {
  sides: 3,
  size: 100,
  x: 150,
  y: 150
}

const stage = document.getElementById('stage');
const score = document.getElementById('score');

redraw(stage, polygonConfig);
const incButton = document.getElementById('inc');
const resetButton = document.getElementById('reset');

incButton.addEventListener("click", () => {
  polygonConfig.sides++;
  score.innerHTML = polygonConfig.sides;
  redraw(stage, polygonConfig);
});

resetButton.addEventListener("click", () => {
  polygonConfig.sides = 3;
  score.innerHTML = polygonConfig.sides;
  redraw(stage, polygonConfig);

  setTimeout(() => {
    stage.className = "tmp";
  }, 1000);
  stage.className += "retroPhoneAnimation";
});

function redraw(stage, polygon) {
  // if ( polygon.sides === 20 ) {
  //
  // } else {
  //   stage.className = "";
  // }
  //
  // if ( polygon.sides > 20 ) {
    // setTimeout(() => {
    //   stage.className = "asdf";
    // }, 1000);
    // polygon.sides = 3;
    // stage.className += "retroPhoneAnimation";
  // }


  const cx = stage.getContext('2d');

  //clear canvas for redraw
  cx.clearRect(0, 0, stage.width, stage.height);

  //begin path drawing
  cx.beginPath();

  cx.moveTo(polygon.x +  polygon.size, polygon.y); //starting point

  for ( var i = 1; i < polygon.sides; i++ ) {
      cx.lineTo(
        polygon.x + polygon.size * Math.cos(i * 2 * Math.PI / polygon.sides),
        polygon.y + polygon.size * Math.sin(i * 2 * Math.PI / polygon.sides)
      );
  }
  cx.strokeStyle = "#fff";

  //fix to make edges meet
  cx.lineTo(polygon.x +  polygon.size, polygon.y + 2);

  cx.lineWidth = 5;
  cx.stroke();
}
