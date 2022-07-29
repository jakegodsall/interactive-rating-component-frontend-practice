const buttonBar = document.querySelector('.options');
const submitButton = document.querySelector('.submit');

buttonBar.addEventListener('click', e => {
    if (e.target.classList.contains('btn')) {
        for (let i = 0; i < buttonBar.children.length; i++) {
            buttonBar.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
        console.log(buttonBar);
    }
    
});

const value = submitButton.addEventListener('click', () => {
    for (let i = 0; i < buttonBar.children.length; i++) {
        if (buttonBar.children[i].classList.contains('active')) {
            return buttonBar.children[i].textConten;
        }
    }
})

