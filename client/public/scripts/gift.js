const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());

    const response = await fetch('/gifts');
    const data = await response.json();

    const giftContent = document.getElementById('gift-content');
    let gift;
    gift = data.find(gift => gift.id === requestedID);

    if (gift) {
        const image = document.getElementById('image');
        image.src = gift.image;
        
        const name = document.getElementById('name');
        name.textContent = gift.name;

        const submittedBy = document.getElementById('submittedBy');
        submittedBy.textContent = 'Submitted by: ' + gift.submittedBy;

        const pricePoint = document.getElementById('pricePoint');
        pricePoint.textContent = 'Price: ' + gift.pricePoint;

        const audience = document.getElementById('audience');
        audience.textContent = 'Great for: ' + gift.audience;

        const description = document.getElementById('description');
        description.textContent = gift.description;

        document.title = `${gift.name} | UnEarthed`;
    } else {
        const noGiftsWarning = document.createElement('h2');
        noGiftsWarning.textContent = 'No Gifts Available 😞';
        giftContent.appendChild(noGiftsWarning);
    }
}

renderGift();