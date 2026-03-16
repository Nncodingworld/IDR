/* COUNTER ANIMATION */

function animateValue(id,start,end,duration){

let obj=document.getElementById(id);
let range=end-start;
let current=start;
let increment=end>start?1:-1;
let stepTime=Math.abs(Math.floor(duration/range));

let timer=setInterval(function(){

current+=increment;
obj.innerHTML=current+"+";

if(current==end){
clearInterval(timer);
}

},stepTime);

}

animateValue("partners",0,25,2000);
animateValue("students",0,1200,2000);
animateValue("projects",0,180,2000);


/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{

if(entry.isIntersecting){
entry.target.classList.add("active");
}

});
});

const hiddenElements = document.querySelectorAll(".scroll-animate");

hiddenElements.forEach((el)=>observer.observe(el));

window.addEventListener("scroll", function(){

const nav = document.querySelector("nav");

if(window.scrollY > 80){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});