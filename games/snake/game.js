'use strict';

/**
 * Game Objects
 */
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let movespeed = 16;
let count = 0;
const snake = {
  x: 160,
  y: 160,

  // velocity
  dx: movespeed,
  dy: 0,

  // keep track of cells that body occupies
  body: [],
  max_length: 4,
}
const apple = {
  x: 320,
  y: 320,
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

let incrementScore;
let resetScore;

{
  /**
   * Render score counter
   */
   const domContainer = document.querySelector('#score');
   const e = React.createElement;

   function GameScore(){
    const [score, setScore] = React.useState(snake.max_length - 4);

    const highScore = React.useRef(0);
    
    incrementScore = () => {
      setScore(score + 1);
    };

    resetScore = () => {
      if (score > highScore.current) {
        highScore.current = score;
      }
      setScore(0);
    }

    return (
      <div className="score-wrapper">
        <span>High score: {highScore.current}</span>
        <span>Current Score: {score}</span>
      </div>
    );
   }

   ReactDOM.render(e(GameScore), domContainer);
}


{
  /**
   * Rendering game controls
   */
  const domContainer = document.querySelector('#game-controls');
  const e = React.createElement;

  const Directions = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
  }

  function GameController(){

    const Input = {
      ARROWS: 'arrows',
      JOYSTICK: 'joystick',
    }
    const [inputMode, setInputMode] = React.useState(Input.ARROWS);

    /**
     * Template button control to emulate arrow keys on mobile view
     * @param {Directions enum} direction 
     * @returns callback function to perform that specific action
     */
    function ButtonControl(direction){
      function onclick(){
        switch (direction) {
          case Directions.UP:
            return snakeUp();
          case Directions.DOWN:
            return snakeDown();
          case Directions.LEFT:
            return snakeLeft();
          case Directions.RIGHT:
            return snakeRight();
          default:
            console.error('error for input - direction');
            break;
        }
      }
      return (
        <button 
          onClick={onclick}
          className={'control-button'}
        >
          <i className={`fas fa-chevron-${direction}`}></i>
        </button>
      );
    }

    let controls;

    if (inputMode === Input.JOYSTICK) {
      controls = (<div></div>);
    }
    if (inputMode === Input.ARROWS) {
      controls = (<div id="controls-area" className="controls-area">
        <span></span>{ButtonControl(Directions.UP)}<span></span>
        {ButtonControl(Directions.LEFT)}<span></span>{ButtonControl(Directions.RIGHT)}
        <span></span>{ButtonControl(Directions.DOWN)}<span></span>  
      </div>);
    }

    // TODO: This looks ugly as hell
    return (<div className="game-controls-area">
      <div></div>
      <div>
        {/* <div className="select-control-area">
          <select className="select-controls" onChange={(e) => setInputMode(e.target.value)}>
            <option value={Input.ARROWS}>Arrows</option>
            <option value={Input.JOYSTICK}>Joystick</option>
          </select>
        </div> */}
        {controls}
      </div>
      </div>);
  }

  ReactDOM.render(e(GameController), domContainer);
}


/**
 * Game stuff
 */
function gameloop(){
  requestAnimationFrame(gameloop);

  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;

  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - movespeed;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  
  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - movespeed;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.body.unshift({x: snake.x, y: snake.y});

  // remove cells as we move away from them
  if (snake.body.length > snake.max_length) {
    snake.body.pop();
  }

  // draw apple
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, movespeed-1, movespeed-1);

  // draw snake one cell at a time
  context.fillStyle = 'green';
  snake.body.forEach(function(cell, index) {
    
    // drawing 1 px smaller than the movespeed creates a movespeed effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, movespeed-1, movespeed-1);  

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.max_length++;

      // Increment score
      incrementScore();

      // canvas is 400x400 which is 25x25 movespeeds 
      apple.x = getRandomNumber(0, 25) * movespeed;
      apple.y = getRandomNumber(0, 25) * movespeed;
    }

    // check collision with all cells after this one (modified bubble sort)
    for (let i = index + 1; i < snake.body.length; i++) {
      
      // snake occupies same space as a body part. reset game - lose condition
      if (cell.x === snake.body[i].x && cell.y === snake.body[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.body = [];
        snake.max_length = 4;
        snake.dx = movespeed;
        snake.dy = 0;

        apple.x = getRandomNumber(0, 25) * movespeed;
        apple.y = getRandomNumber(0, 25) * movespeed;
        
        resetScore()
      }
    }
  });
}



/**
 * Event listeners
 */

function snakeUp(){
  console.debug('snake going up')
  if (snake.dy !== 0){
    return;
  }
  snake.dy = -movespeed;
  snake.dx = 0;
}
function snakeDown(){
  console.debug('snake going down')
  if (snake.dy !== 0){
    return;
  }
  snake.dy = movespeed;
  snake.dx = 0;
}
function snakeRight(){
  console.debug('snake going right')
  if (snake.dx !== 0){
    return;
  }
  snake.dy = 0;
  snake.dx = movespeed;
}
function snakeLeft(){
  console.debug('snake going left')
  if (snake.dx !== 0){
    return;
  }
  snake.dy = 0;
  snake.dx = -movespeed;
}

document.addEventListener('keydown', (e) => {
  e = e || window.event;
  const key = e.key;
  switch (key) {
    case 'ArrowLeft':
      return snakeLeft();
    case 'ArrowUp':
      return snakeUp();
    case 'ArrowRight':
      return snakeRight();
    case 'ArrowDown':
      return snakeDown();
    default:
      // do nothing
      break;
  }
})

// Start the game
requestAnimationFrame(gameloop);