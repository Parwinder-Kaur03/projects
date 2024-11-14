
var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
var main =document.querySelector("#main");
var image = document.querySelector("#img");
var button = document.querySelector("#btn");
var search = document.querySelector("#search")
var imagediv=document.querySelector("#imagediv")
button.addEventListener("click",function(){
    if(search.value.length>0){
    image.src=url+search.value;
    image.style.display="block";
    main.style.height="42vh";
    imagediv.style.marginLeft="30%";
    document.querySelector("p").style.display="none";
    document.querySelector("#btn1").style.display="block";
    }
    else{
        document.querySelector("p").innerHTML="Search box is empty!!"
    }
})