const renderGifts = async () => {
    const response = await fetch('/gifts');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');

    if (data) {
        data.map(gift => {
            const card = document.createElement('div');
            card.classList.add('card');
            mainContent.appendChild(card);

            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');
            topContainer.style.backgroundImage = `url(${gift.image})`;

            const bottomContainer = document.createElement('div');
            topContainer.classList.add('bottom-container');

            const name = document.createElement('h3');
            name.textContent = gift.name;
            bottomContainer.appendChild(name);

            const price = document.createElement('p');
            price.textContent = 'Price: ' + gift.pricePoint;
            bottomContainer.appendChild(price);

            const audience = document.createElement('p');
            audience.textContent = 'Great for: ' + gift.audience;
            bottomContainer.appendChild(audience);

            const readMore = document.createElement('a');
            readMore.textContent = 'Read More >';
            readMore.href = `/gifts/${gift.id}`;
            readMore.roll = 'button';
            bottomContainer.appendChild(readMore);

            card.appendChild(topContainer);
            card.appendChild(bottomContainer);
            mainContent.appendChild(card);
        });
    } else {
        const noGiftsWarning = document.createElement('h2');
        noGiftsWarning.textContent = 'No Gifts Available 😞';
        mainContent.appendChild(noGiftsWarning);
    }
}

const requestedUrl = window.location.href.split('/').pop();

if (requestedUrl) {
    window.location.href = '../404.html';
} else {
    renderGifts();
}
