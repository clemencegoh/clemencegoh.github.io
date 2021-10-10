'use strict';

/**
 * Clock implementation using canvas and js
 */
function drawClock() {
  drawFace(context, radius);
  drawNumbers(context, radius);
  drawTime(context, radius);
}

function drawFace(ctx, r) {
  let grad;
  let radius = r;

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white'); 
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, r) {
  let radius = r;
  let ang;
  ctx.font = `${radius * 0.15}px 'Poppins', sans-serif`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(let i = 1; i < 13; i++){
    ang = i * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(i.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour%12;
  hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  //minute
  minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  // second
  second = (second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02, true);
}

function drawHand(ctx, pos, length, width, extended = false) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  if (extended) {
    ctx.strokeStyle = 'red'
    ctx.moveTo(0, length/5);
  }
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}


/**
 * Driver
 */
let canvas = document.getElementById('clock');
let context = canvas.getContext('2d');
let radius = canvas.width / 2;
context.translate(radius, radius);
radius *= 0.9;

setInterval(drawClock, 1000);