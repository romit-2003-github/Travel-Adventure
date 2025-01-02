//function to dynamically generate cards from the tripData.js file
function generateCards(data) {
    const container = document.getElementById('card-container');

    data.forEach((trip, index) => {
        const card = document.createElement('div');
        card.className = `tripCard wow animate__animated animate__slideInLeft p-4 rounded-lg shadow-lg hover:shadow:xl border-1 border-gray-200 h-auto`;
        card.setAttribute("data-wow-delay", `${(index + 1) * 0.1}s`);

        card.innerHTML = `        
        <img src="${`/images/${trip.destination}.jpg`}"  style="width:100%; height:200px; object-fit:cover;" alt="${trip.destination}"></img>
        <p class="my-4 text-[1.5rem] font-bold" >${trip.source} → ${trip.destination}</p>
        <div class="flex justify-between font-bold">
            <p class="text-gray-700 flex items-center text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2"/>
                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z"/>
                </svg><span>&nbsp; ${trip.date}</span></p>
            <p class="text-gray-700 flex items-center text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
                </svg><span class='space-x-8'>&nbsp; ${trip.time}</span></p>
            <p class="text-gray-700 flex items-center text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg><span class='space-x-4'>&nbsp; ${trip.days}D/${trip.nights}N</span></p>
        </div>
        <div class="flex justify-between items-center my-4">
            <p class="text-2xl font-bold text-primary-emphasis">₹${trip.price}</p>
            <p class="font-bold text-danger">Hurry Up! ${trip.seats} Seats Left!</p>
        </div>
        <div class="flex justify-between items-center">
            <a href="/"><button type="button" class="btn btn-primary w-1/2">View Details</button></a>
            <button type="button" class="btn btn-dark w-1/2 book-btn" data-trip='${JSON.stringify(trip)}'>BOOK NOW!</button>
        </div>
        `;

        container.appendChild(card);
    })


    const bookingBtns = document.querySelectorAll('.book-btn');
    bookingBtns.forEach(button=> {
        button.addEventListener('click', (e) => {
            const trip = JSON.parse(e.target.dataset.trip);

            const queryString = new URLSearchParams(trip).toString();
            window.location.href = `/booking.html?${queryString}`;
        })
    })
}

//calling the function to generate cards
generateCards(tripData);


// For Hamburger Menu
document.getElementById('hamburger-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

