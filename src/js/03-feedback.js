import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

populateForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);



function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
  
}

function populateForm() {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedMessage) {
    form.elements.email.value = savedMessage.email;
    form.elements.message.value = savedMessage.message;
  }
}
