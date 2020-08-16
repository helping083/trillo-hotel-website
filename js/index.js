const sideNavLinks = document.querySelectorAll('.side-nav__item');
const overviewIcons = document.querySelectorAll('.overview__icon-star');
const overviewStarsContainer = document.querySelector('.overview__stars');
let rating = 0;

sideNavLinks.forEach((item) => {
  item.addEventListener('click',(e) => {
    let elems = document.querySelector(".side-nav__item--active");
    if(elems !== null) {
     elems.classList.remove("side-nav__item--active");
    }
    item.classList.add("side-nav__item--active");
  })
});

overviewStarsContainer.addEventListener('click', (e) => {
  if (e.target.className.baseVal === 'overview__icon-star') {
    setStars(e.target.dataset.star)
  } else if (e.target.className.baseVal === "star") {
    getParrentDataAttributes(e.target);
  }
});

function getParrentDataAttributes(children) {
  let closest = children.closest('svg')
  setStars(closest.dataset.star);
}

function setStars(rating) {
  let intRating = parseInt(rating, 10);
  rating = intRating;
  overviewIcons.forEach((item, index) => {
    item.style.fill = "gray";
    if (index + 1 > intRating) {
      return;
    }
    item.style.fill = "red";
  });
}