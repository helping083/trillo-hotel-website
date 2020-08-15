const sideNavLinks = document.querySelectorAll('.side-nav__item');

sideNavLinks.forEach((item) => {
  item.addEventListener('click',(e) => {
    let elems = document.querySelector(".side-nav__item--active");
    if(elems !== null) {
     elems.classList.remove("side-nav__item--active");
    }
    item.classList.add("side-nav__item--active");
  })
});