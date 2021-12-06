/**
 * Bullets class encapsulates both bullets belonging to players as well as 
 * Invaders.
 * 
 * Should take in instance of Player/Invader and initialized such that it 
 * knows if it belongs to Player or Invader and detects collisions
 */

'use strict';

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    this.playerBulletSpeed = 6;
    this.alienBulletSpeed = 2;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, 3, 10);
  }

  isOffScreen(){
    return this.y <= 0;
  }

  hasHit(actor) {
    const dist_x = this.x - (actor.x + 10);
    const dist_y = this.y - (actor.y + 10);
    return Math.hypot(dist_x, dist_y) < 20;
  }

  update(actor) {
    if (actor instanceof Alien) {
      this.y += this.alienBulletSpeed;
    } 
    else if (actor instanceof Player) {
      this.y -= this.playerBulletSpeed;
    }
  }
}