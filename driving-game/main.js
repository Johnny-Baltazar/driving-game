var $raceCar = document.querySelector('.race-car');
var raceCarData = {
  position: 'east',
  location: {
    x: 0,
    y: 0
  },
  started: false
};

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.code === 'ArrowDown') {
    raceCarData.position = 'south';
    $raceCar.classList.add('down');
    $raceCar.classList.remove('up', 'left');
  } else if (event.code === 'ArrowUp') {
    raceCarData.position = 'north';
    $raceCar.classList.add('up');
    $raceCar.classList.remove('down', 'left');
  } else if (event.code === 'ArrowRight') {
    raceCarData.position = 'east';
    $raceCar.classList.remove('up', 'down', 'left');
  } else if (event.code === 'ArrowLeft') {
    raceCarData.position = 'west';
    $raceCar.classList.add('left');
    $raceCar.classList.remove('up', 'down');
  }
}

document.addEventListener('keydown', moveCar);

var moveCarInterval;

function moveCar(event) {
  if (event.code === 'Space' && raceCarData.started === false) {
    raceCarData.started = true;
    moveCarInterval = setInterval(function () {
      raceCarData.location.x = raceCarData.location.x + 16;
      $raceCar.style.left = raceCarData.location.x + 'px';
    }, 16);
  } else if (raceCarData.started === true && event.code === 'Space') {
    clearInterval(moveCarInterval);
  }
}
