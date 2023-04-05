import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('.feedback-form input');
const messageTextareaEl = document.querySelector('.feedback-form textarea');
const btnSubmit = document.querySelector('button[type="submit"]');
const USER_FORM_DATA = 'feedback-form-state';

let feedbackData = {};

formEl.addEventListener('input', throttle(setData, 500));
formEl.addEventListener('submit', removeData);

const dataFormLocalStorage = localStorage.getItem(USER_FORM_DATA);
const perseDataFormLocalStorage = JSON.parse(dataFormLocalStorage);

const emailUser = perseDataFormLocalStorage ? perseDataFormLocalStorage.email : null;
emailInputEl.value = emailUser ? emailUser : '';
feedbackData.email = emailInputEl.value;

const messageUser = perseDataFormLocalStorage ? perseDataFormLocalStorage.message : null;
messageTextareaEl.value = messageUser ? messageUser : '';
feedbackData.message = messageTextareaEl.value;

switchBtn();

function switchBtn() {
    const isActive1 = Boolean(emailInputEl.value);
    const isActive2 = Boolean(messageTextareaEl.value);

    if (isActive1 && isActive2) {
        btnSubmit.removeAttribute("disabled");
    } else {
        btnSubmit.setAttribute("disabled", '');
    }
};

function setData(e) {
    e.preventDefault();

    feedbackData[e.target.name] = e.target.value;
    localStorage.setItem(USER_FORM_DATA, JSON.stringify(feedbackData));

    switchBtn();
};

function removeData(e) {
    e.preventDefault();

    console.log(feedbackData);
    localStorage.removeItem(USER_FORM_DATA);
    e.target.reset();

    switchBtn();
}

