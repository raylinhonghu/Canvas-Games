// global
var Game = {
  init: function() {
    var bgCanvas = document.getElementById('bg-canvas');
    var fgCanvas = document.getElementById('fg-canvas');

    //object
    var canvas = {
      bgCanvas:bgCanvas,
      bfCanvas:bfCanvas,
      bgCtx: bgCanvas.getContext('2d'),
      bfCtx: bfCanvas.getContext('2d')
    };

    var spriteSheet = new Image();
    spriteSheet.src = "./robowalk/robowalk00.png";

    spriteSheet.addEventListener("load",function(){
      var spriteSheet = this;

      var data = {
        animationFrame: 0,
        spriteSheet: spriteSheet,
        canvas: canvas
      };

      Input.init(data);
      Game.run(data);
    });
  },

  run: function (data) {
    var loop = function(){
      Game.input(data);
      Game.update(data);
      Game.render(data);

      data.animationFrame++;

      window.requestAnimationFrame(loop);
    };

    loop();
  }
}
