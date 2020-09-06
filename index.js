for (var i=0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    sound(this.innerHTML);
  });
  document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){
    sound(event.key);
  });
}
function sound(key){
  var active = document.querySelector("."+key);
  active.classList.add("pressed");
  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
  switch(key){
    case 'w':
    audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case 'a':
    audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case 's':
    audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case 'd':
    audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
    case 'j':
    audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case 'k':
    audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    case 'l':
    audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;
  }
}
