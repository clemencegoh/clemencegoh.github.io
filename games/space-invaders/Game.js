/**
 * Game driver file for updating game state
 */

'use strict';

/**
 * Driver animation
 */
const alienImage = createImage('./assets/invader.png');
const playerImage = createImage('./assets/shooter.png');

let invaders = new Invaders(alienImage, 4);

let player;


let count = 0;
function gameloop(){
  // requestAnimationFrame(gameloop);

  // limit to 15 fps
  if (++count < 4) {
    return;
  }

  count = 0;
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  invaders.update();
  invaders.draw();
}

function startGame(){
  // Do this only once
  

  // requestAnimationFrame(gameloop);
}

startGame();


/**
 * Placeholder controls
 */
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      return moveLeft();
    case 'ArrowRight':
      return moveRight();
    case 'Spacebar': // older browsers
      return shoot();
    case ' ':
      return shoot();
    default:
      break;
  }
})