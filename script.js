let ratingButtons = document.getElementsByClassName('button');
let submit = document.getElementById('submit');
let card = document.getElementById('card');
let thank = document.getElementById('thank');

Array.from(ratingButtons).forEach((button) => {
  button.addEventListener('click', function () {
    Array.from(ratingButtons).forEach((btn) => {
      btn.classList.remove('bg-lightgray');
      btn.classList.remove('selectedButton');
    });

    this.classList.add('bg-lightgray');
    this.classList.add('text-white'), this.classList.add('selectedButton');
  });
});

function sendForm() {
  let selectedButton = document.getElementsByClassName('selectedButton');
  if (!selectedButton.length) {
    let alert = document.getElementsByClassName('alert');
    alert[0].classList.remove('hidden');
    return;
  }
  card.classList.add('hidden');
  thank.classList.remove('hidden');
  rating = selectedButton[0].textContent;
  final = document.getElementById('result');
  final.textContent = rating;
}

submit.addEventListener('click', sendForm);
