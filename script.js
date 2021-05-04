// Get the element on the page with the id canvas

let input, button, greeting;
let sel;
let dropdown;
/*var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
var month = document.getElementById('month');
var day = document.getElementById('day');*/

function setup() {
  // create canvas
 /* createCanvas(550, 500);
  background(200);*/

  input = createInput();
  input.position(20, 65);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
 /*
  sel = createSelect();
  sel.position(20, 100); 
  sel.option('january');
  sel.option('february');
  sel.option('march'); 
  sel.option(newSelection); */


  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
  
  //button.mousePressed(remove);

}

function greet() {
  const name = input.value();
  greeting.html(name +'s Astrology' + '!');
  input.value(''); 
}

/*function newSelection() {
  console.log(sel.value()); 
}*/
// when submit clicked// 
    /*function click () { 
    remove(); 
}
 function select() {
  if (val === 'january') {
    document.getElementById("output").innerHTML = "scorpio":
  }
*/
