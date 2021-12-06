/**
 * Canvas helper global functions
 */
'use strict';

let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');

function createImage(imagepath){
  const imageItem = document.createElement('img');
  imageItem.src = imagepath;
  return imageItem;
}