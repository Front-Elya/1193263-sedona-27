var link = document.querySelector(".search-form-button");
var popup = document.querySelector(".search-form-main");
link.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.toggle("popup-show");
});
