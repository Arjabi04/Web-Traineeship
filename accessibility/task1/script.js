var form = document.querySelector('.contact-form__form');

form.addEventListener('submit', function (event) {
  if (form.checkValidity()) {
    event.preventDefault(); // Stops the page from reloading on success
    alert('Success! Your message has been submitted.');
    form.reset();
  }
});