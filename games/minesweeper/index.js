// Onload driver
window.onload = function () {
  generateGameboard(8, 8, 10);
}

let gameboard = {};
let currentScore = 0;
let totalScore = 54;
let isGameover = false;

class Tile {
  constructor(
    id,
    isMine = false,
    top = null,
    topRight = null,
    right = null,
    bottomRight = null,
    bottom = null,
    bottomLeft = null,
    left = null,
    topLeft = null,
  ) {
    this.id = id;
    this.isMine = isMine;
    this.top = top;
    this.topRight = topRight;
    this.right = right;
    this.bottomRight = bottomRight;
    this.bottom = bottom;
    this.bottomLeft = bottomLeft;
    this.left = left;
    this.topLeft = topLeft;
    this.isOpen = false;
  }

  get value(){
    const arr = [
      this.top,
      this.topRight,
      this.right,
      this.bottomRight,
      this.bottom,
      this.bottomLeft,
      this.left,
      this.topLeft,
    ];
    let valCount = 0;
    for (const direction of arr) {
      if (direction && direction.isMine) {
        valCount += 1;
      }
    }
    return valCount;
  }

  get htmlElement() {
    if (this.isMine){
      if (this.isOpen) {
        return `<span id="tile-${this.id}" class="tile mine"></span>`;
      }
      return `<span id="tile-${this.id}" onmousedown="checkClick(event, ${this.id})" class="tile mine"></span>`;
    }
    if (this.isOpen) {
      return `<span id="tile-${this.id}" class="tile-open">${this.value ?? ''}</span>`;
    }
    return `<span id="tile-${this.id}" onmousedown="checkClick(event, ${this.id})" class="tile"></span>`;
  }

  get htmlNode() {
    let newElement = document.createElement('span');
    newElement.id = `title-${this.id}`;
    if (this.isOpen) {
      newElement.className = 'tile tile-open';
    }
    newElement.innerText = this.value;
    return newElement;
  }
}

const checkClick = (event, id) => {
  if (event.button === 0) {
    // Left click to open
    return openTile(id);
  } else {
    // Right click to set flag
    return setFlag(id);
  }
}

const resetGame = () => {
  isGameover = false;
  const smiley = document.getElementById('status-icon');
  smiley.className = "far fa-smile";
  changeLevels();
}

const setScore = (score) => {
  const scoreElement = document.getElementById('score-indicator');
  scoreElement.innerText = `${score} / ${totalScore}`;
}

const incrementScore = () => {
  const scoreElement = document.getElementById('score-indicator');
  currentScore += 1;
  scoreElement.innerText = `${currentScore} / ${totalScore}`;
}

const setGameOver = (win) => {
  isGameover = true;
  const smiley = document.getElementById('status-icon');
  smiley.className = win ? "fas fa-smile win-green" : "fas fa-sad-tear gameover-red";
  alert(win ? 'You Won!' : "Game over");

  // show all bombs
  const mineElements = document.getElementsByClassName('mine');
  
  for (elem of mineElements) {
    let flagNode = document.createElement('i');
    flagNode.className = 'fas fa-bomb';
    elem.appendChild(flagNode);
  }
}

const setFlag = (id) => {
  let changedElement = document.getElementById(`tile-${id}`);
  if (changedElement.className?.includes('flagged')) {
    changedElement.className = changedElement.className.replace(' flagged', '');
    changedElement.removeChild(changedElement.firstChild);
  } else {
    changedElement.className = changedElement.className + ' flagged';
    childNode = document.createElement('i');
    childNode.className = 'fab fa-font-awesome-flag';
    changedElement.appendChild(childNode);
  }
}

const openTile = (id) => {
  if (isGameover) return;

  gameboard[id].isOpen = true;
  let changedElement = document.getElementById(`tile-${id}`);
  let gameSectionElement = document.getElementById('game-section');

  if (gameboard[id].isMine) {
    // Gameover
    setGameOver(false);
    return;
  }
  incrementScore();

  // Open here
  gameSectionElement.replaceChild(gameboard[id].htmlNode, changedElement);

  if (currentScore === totalScore) {
    setGameOver(true);
  }
}

const generateGameboard = (columns, rows, mines) => {
  const gameboardElement = document.getElementById('game-section');
  let styleString = `display: grid; grid-template-columns: `;
  for (let i=0; i<columns; i++){
    styleString += '1fr ';
  }
  styleString += ';';
  gameboardElement.setAttribute('style', styleString);
  gameboardElement.innerHTML = '';

  const totalCount = columns * rows;
  
  totalScore = totalCount - mines;
  currentScore = 0;
  isGameover = false;

  // init random locations
  let randomArr = [...Array(totalCount).keys()];
  const randSort = randomSort(randomArr);
  const selectedRandomNumbers = randSort.slice(0, mines);
  
  // build gameboard hashmap
  for (let i=0; i<totalCount; i++) {
    if (selectedRandomNumbers.includes(i)) {
      gameboard[i] = new Tile(i, isMine = true);
    } else {
      gameboard[i] = new Tile(i, isMine = false);
    }

    // Connect left
    const leftCond = i % columns !== 0;
    if (leftCond) {
      gameboard[i].left = gameboard[i-1];
    }

    // Connect up
    const upCond = i >= columns; 
    if (upCond) {
      gameboard[i].top = gameboard[i - columns];
    }

    // Connect top left
    if (leftCond && upCond) {
      gameboard[i].topLeft = gameboard[i - columns - 1];
    }

    // Connect top right
    const rightCond = (i % columns) !== (columns - 1);
    if (upCond && rightCond) {
      gameboard[i].topRight = gameboard[i - columns + 1];
    }
  }

  // Backwards connect
  for (let i = totalCount-1; i > -1; i--) {
    // Connect right
    const rightCond = (i % columns) !== (columns - 1);
    if (rightCond) {
      gameboard[i].right = gameboard[i + 1];
    }

    // Connect Bottom
    const bottomCond = i <= totalCount - columns;
    if (bottomCond) {
      gameboard[i].bottom = gameboard[i + columns];
    }

    // Connect Right Bottom 
    if (rightCond && bottomCond) {
      gameboard[i].bottomRight = gameboard[i + columns + 1];
    }

    // Connect Left Bottom
    const leftCond = i % columns !== 0;
    if (leftCond && bottomCond) {
      gameboard[i].bottomLeft = gameboard[i + columns - 1];
    }
  }

  for (let i=0; i<totalCount; i++) { 
    gameboardElement.innerHTML += gameboard[i].htmlElement;
  }

}

const setInitialScoreAndMines = async (mines, totalSpace) => {
  const minesLeft = document.getElementById('mines-indicator');
  const score = document.getElementById('score-indicator');
  minesLeft.innerHTML = mines;
  score.innerHTML = `0 / ${totalSpace}`;
}

const changeLevels = () => {
  const val = document.getElementById("select-level").value;
  switch(val) {
    case "1":
      generateGameboard(8, 8, 10);
      setInitialScoreAndMines(10, 54);
      break;
    case "2":
      generateGameboard(16, 16, 40);
      setInitialScoreAndMines(40, 16 * 16 - 40)
      break;
    case "3":
      generateGameboard(16, 30, 99);
      setInitialScoreAndMines(99, 16 * 30 - 99);
      break;
    default:
      console.error("level out of range");
      break;
  }
}


/**
 * Helper functions
 */

// Proper shuffle sorting based on https://github.com/coolaj86/knuth-shuffle
function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Random sort at ~50% faster than above shuffle
function randomSort(array) {
  return array.sort(() => (Math.random() > .5) ? 1 : -1);
}

