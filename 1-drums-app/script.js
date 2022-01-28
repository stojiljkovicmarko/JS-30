//event.keyCode has been deprecated in some browsers
//insted use event.code which some browsers (mobile) still dont have
//or use event.key which is supported in all browsers

function onKeyPressed(event) {
  let pressedKey = event.key.toLowerCase();
  const audio = document.querySelector(`audio[data-key="${pressedKey}"]`);
  const key = document.querySelector(`div[data-key="${pressedKey}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", onKeyPressed);

//if there is css property on the div we then
//remove the class which gives it border and scales it 

function removeTransition(event) {
  if (event.propertyName === "transform") {
    this.classList.remove("playing");
  }
}

//event listeners have to be set on each div separately
//we are listening for the end of css property: transition

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
