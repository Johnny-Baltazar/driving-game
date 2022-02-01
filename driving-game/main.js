var $raceCar = document.querySelector('.race-car');

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.code === 'ArrowDown') {
    $raceCar.classList.add('down');
    $raceCar.classList.remove('up', 'left');
  } else if (event.code === 'ArrowUp') {
    $raceCar.classList.add('up');
    $raceCar.classList.remove('down', 'left');
  } else if (event.code === 'ArrowRight') {
    $raceCar.classList.remove('up', 'down', 'left');
  } else if (event.code === 'ArrowLeft') {
    $raceCar.classList.add('left');
    $raceCar.classList.remove('up', 'down');
  }
}
