let items = document.querySelectorAll('#recipeCarousel .carousel-item');

items.forEach((el) => {
  const minPerSlide = 3;
  let next = el.nextElementSibling;

  for (let i = 1; i < minPerSlide; i++) {

    if (!next) {
      next = items[0];
    }

    let cloneChild = next.firstElementChild.cloneNode(true);
    el.appendChild(cloneChild);

    next = next.nextElementSibling;
  }
});