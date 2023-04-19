import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

emailInput.addEventListener('input', () => {
  localStorage.setItem('email', emailInput.value);
});

messageInput.addEventListener('input', () => {
  localStorage.setItem('message', messageInput.value);
});
// przywrócenie wartości pól z local storage, jeśli takie istnieją
window.addEventListener('load', () => {
  const savedEmail = localStorage.getItem('email');
  const savedMessage = localStorage.getItem('message');
  if (savedEmail) {
    emailInput.value = savedEmail;
  }
  if (savedMessage) {
    messageInput.value = savedMessage;
  }
});

form.addEventListener('submit', () => {
  localStorage.removeItem('email');
  localStorage.removeItem('message');
});

form.addEventListener('input', () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

const clearFormState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener(
  'input',
  throttle(() => {
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500)
);
