// __________________________ TIMELINE ________________________

// VARIABLES

// Hide the last three cards and breakers initially. 
// Since 3 cards and 3 breakers then 6 elements in total.
let hiddenCards = document.querySelectorAll('.timelinecard:nth-last-child(-n+6)');
let hiddenBreakers = document.querySelectorAll('.timelinebreaker:nth-last-child(-n+6)');

// Button functionality
let expandButton = document.querySelector('.primary');
let openanchor = document.getElementById('openanchor')
let closedanchor = document.getElementById('closedanchor')

// Loop the last 3 cards to display none.
hiddenCards.forEach(card => {
    card.style.display = 'none';
});

// Loop the last 3 breakers to display none.
hiddenBreakers.forEach(breaker => {
    breaker.style.display = 'none';
});

expandButton.addEventListener('click', function() {
    hiddenCards.forEach(card => {
        if (card.style.display === 'none') {
            card.style.display = 'grid';
        } else {
            card.style.display = 'none';
        }
    });

    hiddenBreakers.forEach(breaker => {
        if (breaker.style.display === 'none') {
            breaker.style.display = 'block';
        } else {
            breaker.style.display = 'none';
        }
    });

    // Change button text
    let buttonText1 = expandButton.querySelector('.buttontextdefault');
    buttonText1.textContent = buttonText1.textContent === 'Luk tidslinjen' ? 'Åben hele tidslinjen' : 'Luk tidslinjen';
    closedanchor.scrollIntoView({ behavior: 'smooth' });

    let buttonText2 = expandButton.querySelector('.buttontextanimated');
    buttonText2.textContent = buttonText2.textContent === 'Luk tidslinjen' ? 'Åben hele tidslinjen' : 'Luk tidslinjen';
    openanchor.scrollIntoView({ behavior: 'smooth' });
});