let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");
 let upcoming=document.getElementById("upcoming");
 let completed=document.getElementById("completed");
 let canceled=document.getElementById("canceled");
 let upcoming1=document.getElementById("upcoming1");
 let completed1=document.getElementById("completed1");
 let canceled1=document.getElementById("canceled1");


navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
completed.addEventListener("click",function (){
  completed1.classList.remove("hide");
  upcoming1.classList.add("hide");
  canceled1.classList.add("hide");
  completed1.classList.add("show");
 
});
canceled.addEventListener("click",function (){
  canceled1.classList.remove("hide");
  canceled1.classList.add("show");
   completed1.classList.remove("show");
   completed1.classList.add("hide");
   upcoming1.classList.add("hide");
  
  
 
});
upcoming.addEventListener("click",function (){
  upcoming1.classList.remove("hide");
  upcoming1.classList.add("show");
  canceled1.classList.remove("show");
  canceled1.classList.add("hide");
   completed1.classList.remove("show");
   completed1.classList.add("hide");
  
  
  
 
});