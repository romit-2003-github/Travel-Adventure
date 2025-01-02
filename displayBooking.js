console.log("displayBooking.js loaded");


document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const detailsContainer = document.getElementById('booking-details');
    const formdata = localStorage.getItem('formData');

    const retrivedData = formdata ? JSON.parse(formdata) : null;
    // const formData = {name, email, mobile, gender, address, date, time source, destination, noofseats, totalPrice};
    if (retrivedData) {
        detailsContainer.innerHTML = `
             <h4 class="mb-3 text-4xl font-bold text-start text-white text-center bg-dark py-4">Booking Summary</h4>
             <div class="flex md:flex-row flex-col items-center justify-between text-2xl p-5 mx-5">
                <p class="text-4xl text-primary font-bold"> ${retrivedData.source}</p>
                <p class="text-4xl text-primary font-bold"> &rarr; </p>
                <p class="text-4xl text-primary font-bold"> ${retrivedData.destination}</p>
             </div>
             <div class="flex md:flex-row flex-col items-center justify-between px-5 mx-5">
                <p class="text-2xl text-danger font-bold"> ${retrivedData.date}</p>
                <p class="text-2xl text-danger font-bold"> ${retrivedData.time}</p>
             </div>
             <div class="flex flex-col p-5 mx-5 text-lg">
                <p class='mb-2'><strong>Name: </strong>${retrivedData.name}</p>
                <p class='my-2'><strong>Email: </strong>${retrivedData.email}</p>
                <p class='my-2'><strong>Mobile No.: </strong>${retrivedData.mobile}</p>
                <p class='my-2'><strong>Gender: </strong>${retrivedData.gender}</p>
                <p class='my-2'><strong>Address: </strong>${retrivedData.address}</p>
                <p class='my-2'><strong>Seats Booked: </strong>${retrivedData.noofseats}</p>
             </div>
             <p class="text-2xl text-end mx-5 text-primary-emphasis font-bold">Grand Total: Rs.${retrivedData.totalPrice}</p>            
        `;
    }
    else {
        detailsContainer.innerHTML = `
            <h4 class="text-danger">No Booking Found!</h4>
            <div class="card-body">
                <p>It seems you have not made any booking yet.</p>
            </div>`;
    }
});

const cancelButton = document.getElementById('cancel-btn');
cancelButton.addEventListener('click', () => {
    const confimation = confirm("Are you sure you want to cancel the booking?");
    if(confimation) {
        localStorage.removeItem('formData');
        window.location.href = '/index.html';
    }
});

const paymentButton = document.getElementById('pay-now-btn');
paymentButton.addEventListener('click', () => {
    window.location.href = 'https://www.paypal.com/';
});

