const block = document.querySelector(".block");
let counter = 0;
let a = false;
function anim() {
  counter++;
  block.style.transform = `translateX(${counter}px)`;

  if (counter < 200) {
    a = requestAnimationFrame(anim);
  }
}
requestAnimationFrame(anim);
