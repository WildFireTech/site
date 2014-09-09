 var navbar = document.getElementsByClassName("navbar")[0];
 window.addEventListener("scroll", scrollHandler);

 function scrollHandler(e) {
     var event = e || window.event,
         target = event.target || event.srcElement;
     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     if (scrollTop > 50) {
         navbar.classList.add("scrollChange");
     } else {
         navbar.classList.remove("scrollChange");
     }
 }