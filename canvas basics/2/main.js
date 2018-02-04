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

// Object of type function
// store file + (regular sprite or pattern like a bg)
var Sprite = function(filename, is_pattern){
  // construct
  this.image = null;
  this.pattern = null;
  this.TO_RADIANS = Math.PI/180;

  if(filename != undefined && filename != "" && filename != null){
    // built in Image Obj
    this.image = new Image();
    this.image.src = filename;

    if(is_pattern){this.pattern = Context.context.createPattern(this.image,'repeat');}
  }else{
    console.log("unable to log sprite");
  }

  this.draw = function (x,y,w,h){
    // pattern?
    if(this.pattern != null){
      Context.context.fillStyle = this.pattern;
      Context.context.fillRect(x,y,w,h);
    }else{
      // undefined width and height
      if(w == undefined || h == undefined){
        Context.context.drawImage(this.image,x,y,
                                  this.image.width,
                                  this.image.height);
      }else{
        // stretched
        Context.context.drawImage(this.image,x,y,w,h);
      }

    }
  };

  this.rotate = function(x,y,angle){
    // save the state of canvas this time
    Context.context.save();
    // Do
    Context.context.translate(x,y);
    Context.context.rotate(angle * this.TO_RADIANS);
    // draw and restore
    Context.context.drawImage(this.image,
                            -(this.image.width/2),
                            -(this.image.height/2));
    Context.context.restore();
  }
}


$(document).ready(function(){
  //initialize
  Context.create("canvas");
  // reset path
  var ymh = "human3.png";
  var by = "human2.png";

  var image = new Sprite(ymh,false);
  var image2 = new Sprite(by,false);
  var pattern = new Sprite(by,true);

  var angle = 0;

  setInterval(function(){
    // clear context
    Context.context.fillStyle = "#000000";
    Context.context.fillRect(0,0,800,800);

    image.draw(0,0,10,10);
    // image.draw(0,74,256,32);
    // pattern.draw(160,160,256,180);

    image.rotate(115,160,angle+=4.0);
    // image2.rotate(115,160,angle+=4.0);

  },25);
})
