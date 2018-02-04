// create own constructor
var Context = {
  convas : null,
  context : null,
  create: function(canvas_tag_id){
    this.canvas = document.getElementById(canvas_tag_id);
    this.context = this.canvas.getContext('2d');
    return this.context;
  }
}


$(document).ready(function(){

  //initialize
  Context.create("canvas");
  // reset path
  Context.context.beginPath();
  Context.context.rect(0,0,640,480);
  Context.context.fillStyle = 'black';
  Context.context.fill();

})
