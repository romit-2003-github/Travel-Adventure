document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    console.log(params);
    const sourceIp = document.getElementById('source');
    const destinationIp = document.getElementById('destination');
    const dateIp = document.getElementById('date');
    const timeIp = document.getElementById('time');
    const seatsIp = document.getElementById('seats');
    const priceIp = document.getElementById('price');

    sourceIp.value = params.get('source') || '';
    destinationIp.value = params.get('destination') || '';
    dateIp.value = params.get('date') || '';
    timeIp.value = params.get('time') || '';
    seatsIp.value = params.get('seats') || '';
    priceIp.value = params.get('price') || '';

    const destInput = document.getElementById('destF');
    destInput.innerHTML = params.get('destination') || '';
});


const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const noofseats = document.getElementById('NoofSeats').value;
    const totalPrice = document.getElementById('price').value * noofseats;


    const formData = {name, email, mobile, gender, address, date, time, source, destination, noofseats, totalPrice};

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
    alert("Booking Successful!");
    window.location.href = '/payment.html';
});