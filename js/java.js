const its = document.querySelectorAll(".nav-it")
const carrosel = document.querySelectorAll(".img-list>li>img");
var main_img =  document.querySelector(".main-img>img");
its.forEach(it => {
    it.addEventListener("click",function(){
        document.getElementById("active").id = "";
        this.id = "active";


    })
});

carrosel.forEach(cd =>{
    cd.addEventListener("click", function(){
        main_img.setAttribute("src",cd.getAttribute("src"));
    })
})