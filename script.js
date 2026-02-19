const screens = document.querySelectorAll(".screen");
const progressBar = document.querySelector(".progress-bar");
let current = 0;

function updateProgress(){
  progressBar.style.width = ((current+1)/screens.length)*100+"%";
}

function showScreen(index){
  screens[current].classList.remove("active");
  current=index;
  screens[current].classList.add("active");
  updateProgress();

  if(current===8){
    setTimeout(()=>showScreen(9),3000);
  }
}

document.querySelectorAll(".continue").forEach(btn=>{
  btn.addEventListener("click",()=>showScreen(current+1));
});

document.querySelectorAll(".back").forEach(btn=>{
  btn.addEventListener("click",()=>showScreen(current-1));
});

document.querySelectorAll(".restart").forEach(btn=>{
  btn.addEventListener("click",()=>showScreen(0));
});

document.querySelectorAll(".option").forEach(opt=>{
  opt.addEventListener("click",()=>{
    const parent = opt.parentElement;
    parent.querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));
    opt.classList.add("selected");
    const btn = opt.closest(".screen").querySelector(".continue");
    if(btn) btn.disabled=false;
  });
});

document.querySelectorAll(".image-option").forEach(opt=>{
  opt.addEventListener("click",()=>{
    const parent=opt.parentElement;
    parent.querySelectorAll(".image-option").forEach(o=>o.classList.remove("selected"));
    opt.classList.add("selected");
    const btn=opt.closest(".screen").querySelector(".continue");
    if(btn) btn.disabled=false;
  });
});

document.querySelectorAll(".input-field").forEach(input=>{
  input.addEventListener("input",()=>{
    const screen=input.closest(".screen");
    const btn=screen.querySelector(".continue");
    const inputs=screen.querySelectorAll(".input-field");
    btn.disabled = !(inputs[0].value && inputs[1].value);
  });
});

updateProgress();
