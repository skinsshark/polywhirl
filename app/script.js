let polygonConfig = {
  sides: 3,
  size: 100,
  x: 150,
  y: 150
}

const stage = document.getElementById('stage');

redraw(stage, polygonConfig);

const incButton = document.getElementById('inc');

incButton.addEventListener("click", () => {
  polygonConfig.sides++;
  handleClick(stage, polygonConfig);
});

function handleClick(stage, polygon) {

  console.log('asdf ' + polygon.sides);
  if ( polygon.sides > 20 ) {
    polygon.sides = 3;
  }

  redraw(stage, polygon);

}

function redraw(stage, polygon) {
  const cx = stage.getContext('2d');

  //clear canvas for redraw
  cx.clearRect(0, 0, stage.width, stage.height);

  //begin path drawing
  cx.beginPath();

  cx.moveTo(polygon.x +  polygon.size, polygon.y); //starting point

  for ( var i = 1; i < polygon.sides; i++ ) {
      cx.lineTo(polygon.x + polygon.size * Math.cos(i * 2 * Math.PI / polygon.sides), polygon.y + polygon.size * Math.sin(i * 2 * Math.PI / polygon.sides));
  }

  //fix to make edges meet
  cx.lineTo(polygon.x +  polygon.size, polygon.y + 2);

  cx.strokeStyle = "#fff";
  cx.lineWidth = 5;
  cx.stroke();
}
