var newImg = new Image;
var imgHeight;
/*newImg.src = document.querySelector("#imageOne img").src;
*/
/*newImg.src = 'images/02.jpg'*/


function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }



// set canvas id to variable
var canvas = document.getElementById('canvas');

// get canvas 2D context and set it to the correct size
var ctx = canvas.getContext('2d');
//resize(); 
$(function(){
    
      $('button').on('click',function(e){
        e.preventDefault();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        newImg.src = $(this).data('src');
        var img = newImg;
        ctx.drawImage(img, 10, 10);
        //console.log(typeof newImg)
        //$('#image').html('<img src="'+imgSRC+'" alt="" />');
      });
    
    });




// resize canvas when window is resized
function resize() {
  var myImg = new Image;
  myImg.src = $('button').data('src')
  console.log(myImg.height)
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}


/*window.onload = function() {
    var img = newImg;
    ctx.drawImage(img, 10, 10);
}*/

  /*console.log(newImg.src)*/
  
    


// add event listeners to specify when functions should be triggered
window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// last known position
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {

  var mousePos;
  canvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(canvas, evt);
        pos.x = mousePos.x;
        pos.y = mousePos.y;
      }, false);

  /*pos.x= e.clientX;
  pos.y = e.clientY;*/
}

function draw(e) {
  
  var mousePos;
  canvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(canvas, evt);
        pos.x = mousePos.x;
        pos.y = mousePos.y;
      }, false);

  if (e.buttons !== 1) return; // if mouse is pressed.....

  var color = '#000000'//document.getElementById('hex').value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = 5; // width of line 
  ctx.lineCap = 'round'; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!

 }