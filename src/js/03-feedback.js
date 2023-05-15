import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('.feedback-form input');
const messageTextareaEl = document.querySelector('.feedback-form textarea');
const USER_FORM_DATA = 'feedback-form-state';
let feedbackData;

if(!(localStorage.getItem(USER_FORM_DATA))){
    feedbackData = {};
} else{
    feedbackData = JSON.parse(localStorage.getItem(USER_FORM_DATA)); 
}

setInputValueFromStorage();

formEl.addEventListener('input', throttle(storeData, 500))
formEl.addEventListener('submit', clearData);

function storeData(e){
    feedbackData[e.target.name]= evt.target.value;
    localStorage.setItem(USER_FORM_DATA, JSON.stringify(feedbackData));
};
function setInputValueFromStorage(){
    const inputArray = localStorage.getItem(USER_FORM_DATA);
    if(inputArray){
        const storage = JSON.parse(inputArray);
        messageTextareaEl.value = storage.message || "";
        emailInputEl.value = storage.email || "";
    }
};
function clearData(e){
    e.preventDefault();
    const clearFeedbackData = localStorage.getItem(USER_FORM_DATA);
    const clearFeedbackDataJSON = JSON.parse(clearFeedbackData);
    if(messageTextareaEl.value ==="" || emailInputEl.value ===""){
        alert("Input required!");
            return;
        }else{
            console.log(clearFeedbackDataJSON);
        }
    
    localStorage.removeItem(USER_FORM_DATA);
    formEl.reset();
    delete feedbackData.email;
    delete feedbackData.message;
};
