var canvas = null;
var context = null;

// how often weld lie kto call the animate function
var frameRate = 1000/30;
// represent what the current frame in our flip book is
var frame = 0;

var assets = [
  'robowalk/robowalk00.png',
  'robowalk/robowalk01.png',
  'robowalk/robowalk02.png',
  'robowalk/robowalk03.png',
  'robowalk/robowalk04.png',
  'robowalk/robowalk05.png',
  'robowalk/robowalk06.png',
  'robowalk/robowalk07.png',
  'robowalk/robowalk08.png',
  'robowalk/robowalk09.png',
  'robowalk/robowalk10.png',
  'robowalk/robowalk11.png',
  'robowalk/robowalk12.png',
  'robowalk/robowalk13.png',
  'robowalk/robowalk14.png',
  'robowalk/robowalk15.png',
  'robowalk/robowalk16.png',
  'robowalk/robowalk17.png',
  'robowalk/robowalk18.png',
]

setup = function () {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for(var i=0; i<assets.length; i++){
      frames.push(new Image());
      frames[i].onload = onImageLoad;
      frames[i].src = assets[i];
    }
    setInterval(animate,frameRate);
}

var frames = [];

onImageLoad = function () {
  context.drawImage(this, 0, 0);
  // console.log("imahge")
}
var x = 30 ;
var y = 0 ;
var animate = function(){
  y++;

  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(frames[frame],x,y);
  frame = (frame + 1)% frames.length;
}

setup();
