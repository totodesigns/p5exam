// __________________________ TIMELINE ________________________

let hiddenCards = Array.from(document.querySelectorAll('.timelinecard:nth-last-child(-n+6)'));
let hiddenBreakers = Array.from(document.querySelectorAll('.timelinebreaker:nth-last-child(-n+6)'));

let expandButton = document.querySelector('.primary');
let openanchor = document.getElementById('openanchor');
let closedanchor = document.getElementById('closedanchor');

for (let i = 0; i < hiddenCards.length; i++) {
    hiddenBreakers[i].style.display = 'none';
    hiddenCards[i].style.display = 'none';
}

expandButton.addEventListener('click', function() {
    for (let i = 0; i < hiddenCards.length; i++) {
        if (hiddenCards[i].style.display == 'none') {
            hiddenCards[i].style.display = 'grid';
            hiddenBreakers[i].style.display = 'block';
        } else {
            hiddenCards[i].style.display = 'none';
            hiddenBreakers[i].style.display = 'none';
        }
    }

    // BUTTON CHANGE
    let buttonText1 = expandButton.querySelector('.buttontextdefault');
    let buttonText2 = expandButton.querySelector('.buttontextanimated');    

    if (buttonText1.textContent == 'Luk tidslinjen') {
        buttonText1.textContent = 'Åben hele tidslinjen';
        buttonText2.textContent = 'Åben hele tidslinjen'
        closedanchor.scrollIntoView({ behavior: 'smooth' });
    } else {
        buttonText1.textContent = 'Luk tidslinjen';
        buttonText2.textContent = 'Luk tidslinjen';
        openanchor.scrollIntoView({ behavior: 'smooth' });
    }

});

