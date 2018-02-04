'use strict';
// var requirejs = require('requirejs');
// var random = requirejs('lodash');
// var random = require('lodash/number/random');
// var randomNegative = require('./utils/randomNegative');
// var randomHexColor = require('./utils/randomHexColor');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var STAGE_WIDTH = canvas.width;
var STAGE_HEIGHT = canvas.height;

function clear(){
  ctx.clearRect(0,0,STAGE_WIDTH,STAGE_HEIGHT);
}

function drawCircle(x,y,r,color){
  if(color){
    ctx.fillStyle = color;
  }
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.closePath();

  ctx.fill();
}

function Ball(){
  this.x = 200 * Math.random();
  this.y = 300 * Math.random();
  this.xVel = 3 * Math.random();
  this.yVel = 3 * Math.random();
  this.radius = 25 * Math.random();
  this.color = 'orange';
};


Ball.prototype.update = function(){
  this.x += this.xVel;
  this.y += this.yVel;

  if((this.y+this.radius)>STAGE_HEIGHT){
    this.yVel = -1 * this.yVel;
  }
  if((this.x+this.radius)>STAGE_WIDTH){
    this.xVel = -1 * this.xVel;
  }
  if((this.y+this.radius)<0){
    this.yVel = -1 * this.yVel;
  }
  if((this.x+this.radius)<0){
    this.xVel = -1 * this.xVel;
  }
};

Ball.prototype.draw = function(){
  drawCircle(this.x,this.y,this.radius,this.color);
};

var ball = new Ball();
var ballArray = [];
for(var i = 0; i < 10; i++){
  ballArray.push(new Ball());
}

function draw(){
  clear();

  ballArray.forEach(function(singleBall){
    singleBall.update();
    singleBall.draw();
  })
  window.requestAnimationFrame(draw);


}
window.requestAnimationFrame(draw);
// window.setInterval(draw,2); not efficient
