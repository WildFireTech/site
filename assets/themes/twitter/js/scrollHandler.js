 var navbar = document.getElementsByClassName("navbar")[0],
     nav_narrow = document.getElementsByClassName("nav-narrow")[0];
 window.addEventListener("scroll", scrollHandler);

 function scrollHandler(e) {
     var event = e || window.event,
         target = event.target || event.srcElement;
     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     if (scrollTop > navbar.style.paddingTop) {
         navbar.classList.add("scrollChange");
         nav_narrow.classList.add("scrollChange");
     } else {
         navbar.classList.remove("scrollChange");
         nav_narrow.classList.remove("scrollChange");
     }
 }