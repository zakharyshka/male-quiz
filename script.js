const screens=document.querySelectorAll(".screen");
const progress=document.querySelector(".progress-bar");
let current=0;

function updateProgress(){
  progress.style.width=((current+1)/screens.length)*100+"%";
}

function show(index){
  screens[current].classList.remove("active");
  current=index;
  screens[current].classList.add("active");
  updateProgress();

  if(current===8){
    setTimeout(()=>show(9),2500);
  }
}

document.querySelectorAll(".continue").forEach(btn=>{
  btn.addEventListener("click",()=>show(current+1));
});

document.querySelectorAll(".back").forEach(btn=>{
  btn.addEventListener("click",()=>show(current-1));
});

document.querySelectorAll(".restart").forEach(btn=>{
  btn.addEventListener("click",()=>show(0));
});

document.querySelectorAll(".option").forEach(btn=>{
  btn.addEventListener("click",()=>{
    btn.parentElement.querySelectorAll(".option").forEach(b=>b.classList.remove("selected"));
    btn.classList.add("selected");
    const cont=btn.closest(".screen").querySelector(".continue");
    if(cont) cont.disabled=false;
  });
});

document.querySelectorAll(".img-option").forEach(btn=>{
  btn.addEventListener("click",()=>{
    btn.parentElement.querySelectorAll(".img-option").forEach(b=>b.classList.remove("selected"));
    btn.classList.add("selected");
    const cont=btn.closest(".screen").querySelector(".continue");
    if(cont) cont.disabled=false;
  });
});

document.querySelectorAll(".input").forEach(input=>{
  input.addEventListener("input",()=>{
    const screen=input.closest(".screen");
    const inputs=screen.querySelectorAll(".input");
    const cont=screen.querySelector(".continue");
    cont.disabled=!(inputs[0].value && inputs[1].value);
  });
});

updateProgress();
