/**
 * Invaders encapsulates the entire enemy side of the map
 * Takes in number of rows to construct aliens
 */

'use strict';

const DIRECTIONS = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
}

class Invaders {
  constructor(alienImage, rows){
    this.alienImage = alienImage;
    this.rows = rows;
    this.direction = DIRECTIONS.RIGHT;
    
    // constants
    this.y = 40;
    this.alienHeight = 40;
    this.alienWidth = 40;
    this.gravitySpeed = 10;


    this.aliens = this.initAliens();
    // this.bullets = [];
    // this.timeSinceLastBullet = 0;

    this.speed = 0.2;
  }
  
  update() {
    // Update alien positions
    if (this.direction === DIRECTIONS.RIGHT){
      this.aliens = this.aliens.map(alien => {
        alien.x += this.speed;
      });
    } else if (this.direction === DIRECTIONS.LEFT) {
      this.aliens = this.aliens.map(alien => {
        alien.x -= this.speed;
      });
    }
    if (this.hasChangedDirection()) {
      this.moveAlienDown();
    }

    /**
     * Maybe update bullets should be relegated to Bullets class
     */

    // // update bullets
    // this.updateBullets(player);

    // if (this.timeSinceLastBullet >= 40) {
    //   let bottomAliens = this.getBottomAliens();

    //   if (bottomAliens.length) {
    //     this.makeABottomAlienShoot(bottomAliens);
    //   } 
    // }

    // this.timeSinceLastBullet++;

    // check aliens left
    if (this.aliens.length === 0) {
      this.nextLevel();
    }
  }

  // updateBullets(player) {
  //   for (let i = this.bullets.length - 1; i >= 0; i-- ) {
  //     this.bullets[i].y  += 2;
  //     if (this.bullets[i].hasHit(player)) {
  //       player.lives --;

  //       this.bullets.splice(i, 1);
  //     }
  //   }
  // }

  moveAlienDown(){
    for (let alien of this.aliens) {
      // Move down by a step
      alien.y += this.gravitySpeed;
    }
  }

  initAliens(){
    let aliens = [];
    let y = this.y;
    // construct rows
    for (let i = 0; i < this.rows; i ++) {
      // construct columns
      for (let x = this.alienWidth; x < canvas.width - this.alienWidth; x += 30) {
        aliens.push(new Alien(x, y, this.alienImage));
        y += this.alienHeight;
      }
    }
    console.log(aliens)
    return aliens;
  }
  
  hasChangedDirection() {
      for (let alien of this.aliens) {
          if (alien.x >= canvas.width - 40) {
              this.direction = DIRECTIONS.LEFT;
              return true;
          } else if (alien.x <= 20) {
              this.direction = DIRECTIONS.RIGHT;
              return true;
          }
      }
      return false;
  }
  draw() {
    this.aliens.forEach(alien => alien.draw());
  }
}