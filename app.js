let hamberger= document.querySelector(".hamberger");
let times= document.querySelector(".times");
let mobNav= document.querySelector(".mobile-nav");
let coll= document.querySelector(".btn")
coll.addEventListener("click",function(){
    mobNav.classList.remove('open');
});
hamberger.addEventListener("click",function(){
     mobNav.classList.add('open');
});
times.addEventListener("click",function(){
    mobNav.classList.remove('open');
});
