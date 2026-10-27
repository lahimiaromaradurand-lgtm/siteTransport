let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let linkNav = document.querySelectorAll(".navigation a");
hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
})
linkNav.forEach(link =>{
    link.addEventListener("click" , function() {
        navigation.classList.remove("active");
        hamburger.classList.remove("active");
    })
})
window.addEventListener("scroll" , function() {
       navigation.classList.remove("active");
        hamburger.classList.remove("active");

})