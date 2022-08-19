// two cards
const ratingCard = document.querySelector('.rating-container');
const thankYouCard = document.querySelector('.thank-you-container');
thankYouCard.style.display = "none";


// elements with event listeners
const buttonBar = document.querySelector('.options');
const submitButton = document.getElementById('submit');


function makeActiveButton(e) {
    // add class "active" to a button when selected (and remove all others)
    if (e.target.classList.contains('btn')) {
        for (let i = 0; i < buttonBar.children.length; i++) {
            buttonBar.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
        console.log(buttonBar);

        e.preventDefault();
    }

}

function showThankYou(e) {
    // switch from the ratingCard to the thankYouCard when clicking submit
    ratingCard.style.display = "none";
    thankYouCard.style.display = "block";

    const rating = document.querySelector('.active').innerHTML;

    const ratingComp = document.getElementById('rating');
    ratingComp.innerText = `You selected ${rating} out of 5`

    e.preventDefault();
}


buttonBar.addEventListener('click', makeActiveButton)
submitButton.addEventListener('click', showThankYou);