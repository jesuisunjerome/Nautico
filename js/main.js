const listCarousel = document.querySelector("#nuestros-clientes .carousel");
const arrowBtns = document.querySelectorAll(".wrapper svg");
const firstCardWidth = listCarousel.querySelector(".card").offsetWidth;
let isDragging = false,
  startX,
  startScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    listCarousel.scrollLeft +=
      btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  listCarousel.classList.add("dragging");

  //Initial cursor and scroll position of the carousel
  //pageX returns the horizontal coordinate of mouse pointer
  startX = e.pageX;
  startScrollLeft = listCarousel.scrollLeft;
};

const dragStop = () => {
  isDragging = false;
  listCarousel.classList.remove("dragging");
};

const dragging = (e) => {
  if (!isDragging) return;

  //Update the scroll position of the carousel based on the cursor movement
  listCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

listCarousel.addEventListener("mousedown", dragStart);
listCarousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
