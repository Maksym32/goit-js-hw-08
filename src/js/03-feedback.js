import throttle from "lodash.throttle";

// const STORAGE_KEY = 'feedback-form-state';
// const formData = {}

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea')
// };
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// // refs.form.addEventListener('input', (e) => {
  
// //   formData[e.target.name] = e.target.value
// //   console.log(formData)
// // })

// populateTextarea()

// function onFormSubmit(evt) { 
//   evt.preventDefault();

//   evt.currentTarget.reset()
//   localStorage.removeItem(STORAGE_KEY)
// };



// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };



// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }




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
