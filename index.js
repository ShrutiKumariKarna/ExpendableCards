var cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function () {
        const image = card.querySelector('img');
        const heading2 = card.querySelector('h2');

        // Modify the width of the clicked card and reset others to their original width
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.width = '80px'; // Set the original width for other cards
                const otherHeading2 = otherCard.querySelector('h2');
                otherHeading2.style.display = 'none';
            }
        });

        card.style.width = '700px'; 
    
        setTimeout(function () {
            heading2.style.display = 'block'; 
        }, 500); // Display the h2 element after 0.5 seconds
    });
});
