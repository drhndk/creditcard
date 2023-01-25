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

const hasilInputNumber = document.querySelector(".hasil-input-name");
const inputNumber = document.querySelector(".input-number");

inputNumber.addEventListener("input", () => {
  hasilInputNumber.innerHTML = inputNumber.value;
});

const holderInput = document.querySelector(".holder-input");
const hasilHolder = document.querySelector(".hasil-holder");

holderInput.addEventListener("input", () => {
  holderInput.style.textTransform = "capitalize";
  hasilHolder.innerHTML = holderInput.value;
});

const month = document.querySelector(".month");
const monthInput = document.querySelector(".mm");

month.addEventListener("input", () => {
  monthInput.innerHTML = month.value;
});

const year = document.querySelector(".year");
const yearInput = document.querySelector(".yy");

year.addEventListener("input", () => {
  yearInput.innerHTML = year.value;
});

const CVV = document.querySelector(".mouse-aktiv-CVV");
const CvvInput = document.querySelector(".inputCVV");

CVV.addEventListener("input", () => {
  CvvInput.innerHTML = CVV.value;
});

const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  setTimeout(() => {
    alert("okee goodjob 🤞");
    window.location.reload();
  }, 1000);
});
