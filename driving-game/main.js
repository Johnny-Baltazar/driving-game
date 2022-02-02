var $raceCar = document.querySelector('.race-car');
var raceCarData = {
  position: 'east'
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

// var raceCarStyle = $raceCar.style;
// var plusSixteen = '16' + 'px';

function moveCar(event) {
  if (event.code === 'Space') {
    if (raceCarData.position === 'south') {
      // console.log('south');
    } else if (raceCarData.position === 'east') {
      // raceCarLeft = raceCarLeft + plusSixteen;
      $raceCar.style.left = $raceCar.style.left + '16' + 'px';
      // console.log('$raceCar.style.left.value:', $raceCar.style.left);
      // console.log('raceCarStyle.left:', raceCarStyle.left);
      // console.log('east');
    } else if (raceCarData.position === 'north') {
      // console.log('north');
    } else if (raceCarData.position === 'west') {
      // console.log('west');
    }
  }
}
