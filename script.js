let pre=document.querySelector(".previus")
let next=document.querySelector(".next")
let slider=document.querySelector(".slider")

next.addEventListener("click",function(){
    let slids = document.querySelectorAll(".slids")
    slider.appendChild(slids[0])
})
pre.addEventListener("click",function(){
    let slids = document.querySelectorAll(".slids")
    slider.prepend(slids[slids.length - 1])
})