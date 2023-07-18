const submitButton = document.getElementById('submitButton');
const registrationForm = document.getElementById('registrationForm');
const registrationData = document.getElementById('registrationData');
const displayFirstName = document.getElementById('displayFirstName');
const displayLastName = document.getElementById('displayLastName');
const displayEmail = document.getElementById('displayEmail');

submitButton.addEventListener('click', () => {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  displayFirstName.textContent = firstName;
  displayLastName.textContent = lastName;
  displayEmail.textContent = email;

  registrationForm.classList.add('hide');
  registrationData.classList.remove('hide');
});
