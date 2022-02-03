/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const isPressed = window.localStorage.getItem("dyslexic") === true;
if(isPressed){
  document.body.classList.add("dyslexia-mode");
}

const toggle = documen.getElementbyId("dyslexia-mode");
 if(isPressed){
   toggle.setAttribute("aria-pressed", "true");
  }

toggle.addEventListener("click", (e)) => {
  let pressed = e.target.getAttribute("aria-pressed") === "true";
  eval.target.setAttribute("aria-pressed", String(!pressed));
  document.body.classList.toggle("dyselxia-mode");
  window.localStorage.setItem("dyslexic", String(!pressed));
}
