'use strict';

let numberIndex = null;
let numberActive = document.querySelectorAll('.rating-card__numbers-item');
numberActive.forEach((selected) => {
  selected.addEventListener("click", (e) => {
    numberIndex = selected.textContent.trim();
    console.log(numberIndex);
  });
});

let contentReview = document.querySelector('.rating-card');
let contentSolution = document.querySelector('.thank-you-card');
let userReview = document.getElementById('userReview');
let form = document.querySelector('.rating-card__content');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.style.display = "none";
  contentSolution.style.display = "block";
  userReview.textContent = numberIndex;
});
