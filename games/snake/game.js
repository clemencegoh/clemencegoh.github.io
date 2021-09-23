'use strict';



{
  /**
   * Rendering game board
   */
  const domContainer = document.querySelector('#game');
  const e = React.createElement;

  function GameArea(){
    return (
      <div></div>
    )
  }

  ReactDOM.render(e(GameArea), domContainer);
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

    function ButtonControl(direction){
      const [stylename, setStylename] = React.useState('control-button');

      function mousedown(){
        setStylename('control-button depressed');
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

      function mouseup(){
        setStylename('control-button');
      }

      return (
        <button 
          onMouseDown={mousedown} 
          onMouseUp={mouseup}
          className={stylename}
        >
          <i className={`fas fa-chevron-${direction}`}></i>
        </button>
      );
    }

    return (<div id="controls-area" className="controls-area">
      <span></span>{ButtonControl(Directions.UP)}<span></span>
      {ButtonControl(Directions.LEFT)}<span></span>{ButtonControl(Directions.RIGHT)}
      <span></span>{ButtonControl(Directions.DOWN)}<span></span>  
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

}



/**
 * Event listeners
 */

function snakeUp(){}
function snakeDown(){}
function snakeRight(){}
function snakeLeft(){}

document.addEventListener('keydown', (e) => {
  e = e || window.event;
  const key = e.key || e.keyCode;
  switch (key) {
    case 37:
      return snakeLeft();
    case 38:
      return snakeUp();
    case 39:
      return snakeRight();
    case 40:
      return snakeDown();
    default:
      // do nothing
      break;
  }
})

// Start the game
// requestAnimationFrame(gameloop);