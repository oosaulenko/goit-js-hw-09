const form = document.querySelector('form.feedback-form');

function loadFormData() {
  const dataForm = localStorage.getItem('feedback-form-state');

  if(!dataForm) {
    return;
  }

  const { email, message } = JSON.parse(dataForm);
  form.elements.email.value = email;
  form.elements.message.value = message;
}

function saveFormState() {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('All fields must be filled!');
    return;
  }

  console.log({ email: emailValue, message: messageValue });

  localStorage.removeItem('feedback-form-state');
  form.reset();
}

window.addEventListener('load', loadFormData);
form.addEventListener('input', saveFormState);
form.addEventListener('submit', onFormSubmit);
