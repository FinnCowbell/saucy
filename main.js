window.onload = function(){
var audio = document.getElementById('player');
var c = document.getElementById('gameSpace');
var ctx = c.getContext('2d');
var saucy0 = document.getElementById('saucy');
var saucy1 = document.getElementById('saucy1')
var saucy = [saucy0,saucy1];
var frame = 0;
var running = false;
function drawSaucy(){
  ctx.clearRect(0,0,c.width,c.height)
    ctx.drawImage(saucy[frame%2],c.width/2-50, c.height/2-50,100,100)
  frame = !frame;
  if(audio.paused || audio.ended){
    clearInterval();
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillText("Click to Start",50,50);
    c.style.cursor = "pointer";
    running = false;
  }
}

function start(){
if(!running){
  ctx.clearRect(0,0,c.width,c.height);
  running = true;
  c.style.cursor = "default";
  audio.play();
  setInterval(drawSaucy,500);
}
}

ctx.fillText("Click to Start",50,50);

c.onclick=start;
}
