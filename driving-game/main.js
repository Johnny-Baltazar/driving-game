var $raceCar = document.querySelector('.race-car');
var $explosion = document.querySelector('.explosion');
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
      if (raceCarData.position === 'east') {
        raceCarData.location.x = raceCarData.location.x + 16;
        $raceCar.style.left = raceCarData.location.x + 'px';
        if (raceCarData.location.x >= 1300) {
          clearInterval(moveCarInterval);
          $explosion.classList.remove('hidden');
          $explosion.style.left = 1350 + 'px';
          $explosion.style.top = raceCarData.location.y - 60 + 'px';
        }
      } else if (raceCarData.position === 'south') {
        raceCarData.location.y = raceCarData.location.y + 16;
        $raceCar.style.top = raceCarData.location.y + 'px';
        if (raceCarData.location.y >= 600) {
          clearInterval(moveCarInterval);
          $explosion.classList.remove('hidden');
          $explosion.style.left = raceCarData.location.x + 20 + 'px';
          $explosion.style.top = raceCarData.location.y - 60 + 'px';
        }
        // $explosion.classList.remove('hidden');
      } else if (raceCarData.position === 'west') {
        raceCarData.location.x = raceCarData.location.x - 16;
        $raceCar.style.left = raceCarData.location.x + 'px';
        if (raceCarData.location.x === -128) {
          clearInterval(moveCarInterval);
          $explosion.classList.remove('hidden');
          $explosion.style.left = raceCarData.location.x + 20 + 'px';
          $explosion.style.top = raceCarData.location.y - 60 + 'px';
        }
      } else if (raceCarData.position === 'north') {
        raceCarData.location.y = raceCarData.location.y - 16;
        $raceCar.style.top = raceCarData.location.y + 'px';
        if (raceCarData.location.y === -16) {
          clearInterval(moveCarInterval);
          $explosion.classList.remove('hidden');
          $explosion.style.left = raceCarData.location.x + 20 + 'px';
          $explosion.style.top = raceCarData.location.y - 60 + 'px';
        }
      }
    }, 16);
  } else if (raceCarData.started === true && event.code === 'Space') {
    raceCarData.started = false;
    clearInterval(moveCarInterval);
  }
}
