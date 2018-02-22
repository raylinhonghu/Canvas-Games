var $canvas = $('.canvas');

$canvas.css("width","1080px");
$canvas.css("height","768px");
$canvas.css("background","white");

 $('form').submit(function(event){
  var $danmu = $('<div></div>')
  danmu.text($("input:first").val())
  event.preventDefault();
})
