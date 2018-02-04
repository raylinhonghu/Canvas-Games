// Don't have to initialize JSON Object
// we can immediately use after we created
var Object1 = {
  colors: 1,
  size: 150,
  draw: function() { this.size; }
};
console.log(Object1.colors);
alert(Object1.size);

// ---------------------------------------------------

// Whereas function constructors we need to initialize it first
// blueprint of object
var Object2 = function(){
  this.colors = 2;
  this.size = 150;
  this.draw = function(){}
}
var obj2 = new Object2();
Object2.colors; // undefined
obj2.colors; // 2
