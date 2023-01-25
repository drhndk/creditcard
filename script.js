const cvvHover = document.querySelector(".mouse-aktiv-CVV");
const slide2 = document.querySelector(".card-front-content");
const slide1 = document.querySelector(".card-back-content");

cvvHover.addEventListener("mouseenter", () => {
  slide1.style.transform = "rotateY(0deg)";
  slide2.style.transform = "rotateY(-180deg)";
});
cvvHover.addEventListener("mouseleave", () => {
  slide1.style.transform = "rotateY(-180deg)";
  slide2.style.transform = "rotateY(0deg)";
});
