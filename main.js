window.onload = function(){
let audio = document.getElementById('player');
let c = document.getElementById('gameSpace');
let ctx = c.getContext('2d');
ctx.font = "30px Comic Sans MS"
ctx.fillText("Click to Start",50,75);
c.onclick=start;
let running = false;
function start(){
  let saucy = {
    frames: [document.getElementById('saucy'),document.getElementById('saucy1'),document.getElementById('saucy3')],
    w: 150,
    h: 300,
  }
  let frame = 0;
  let beat = 1;
  if(!running){
    let runDrawSaucy = setInterval(function(){
        if(!(beat % 16)){ //shows you all sides of the 'sage
        ctx.translate(c.width, 0);
        ctx.scale(-1,1);
        }
        ctx.clearRect(0,0,c.width,c.height) // draws that sexy sausage
        ctx.drawImage(saucy.frames[frame%2],c.width/2-(saucy.w/2), c.height/2-(saucy.h / 2),saucy.w,saucy.h)
        frame = !frame; //bends those voluptious knees
        if(beat >= 144){
           ctx.clearRect(0,0,c.width,c.height);
           ctx.drawImage(saucy.frames[2],c.width/2-(saucy.w/2), c.height/2-(saucy.h / 2),saucy.w,saucy.h);
        }//fuck yeah make him cry
        if(audio.paused || audio.ended){
          ctx.translate(c.width, 0);
          ctx.scale(-1,1);
          ctx.clearRect(0,0,c.width,c.height)
          ctx.fillText("Click to Start",50,50);
          c.style.cursor = "pointer";
          running = false;
          clearInterval(runDrawSaucy); //puts the sausage out of his misery
        }
        beat++
      },500);
    ctx.clearRect(0,0,c.width,c.height);
    running = true;
    c.style.cursor = "default";
    audio.play();
  }

}

}
