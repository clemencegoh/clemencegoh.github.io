// Onload driver
window.onload = function () {
  generateGameboard(8, 8, 10);
}

let gameboard = {};

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
    const val = this.calculateValue([
      this.top,
      this.topRight,
      this.right,
      this.bottomRight,
      this.bottom,
      this.bottomLeft,
      this.left,
      this.topLeft,
    ]);
    if (val === 0) {
      return null;
    }
    return val;
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
    return newElement;
  }

  calculateValue(tileArray){
    let val = 0;
    for (const t of tileArray) {
      if (t != null && t.isMine) {
        val += 1;
      }
    }
    return val;
  }
}

const checkClick = (event, id) => {
  console.log('mousedown', event.button)
  if (event.button === 0) {
    // Left click to open
    return openTile(id);
  } else {
    // Right click to set flag
    return setFlag(id);
  }
}

const setFlag = (id) => {
  let changedElement = document.getElementById(`tile-${id}`);
  console.log(changedElement.className)
  if (changedElement.className?.includes('flagged')) {
    changedElement.className = changedElement.className.replace(' flagged', '');
  } else {
    changedElement.className = changedElement.className + ' flagged';
  }
}

const openTile = (id) => {
  gameboard[id].isOpen = true;
  let changedElement = document.getElementById(`tile-${id}`);
  let gameSectionElement = document.getElementById('game-section');
  const newElement = document.createElement('span')

  // Open here
  gameSectionElement.replaceChild(gameboard[id].htmlNode, changedElement);
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

  // init random locations
  let randomArr = [...Array(totalCount).keys()];
  const randSort = randomSort(randomArr);
  const selectedRandomNumbers = randSort.slice(0, mines);
  
  // build array
  for (let i=0; i<totalCount; i++) {
    if (selectedRandomNumbers.includes(i)) {
      gameboard[i] = new Tile(i, isMine = true);
    } else {
      gameboard[i] = new Tile(i, isMine = false);
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

