
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error message
function showError(input, form)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show Success message
function showSuccess(input, form)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function IsValidEmail(email){
    const emailRegex = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/';
    return emailRegex.test(String(email).toLocaleLowerCase()); 
}

// event listeners
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if (username.value === ''){
    showError(username,'Please enter a username');
  }else{
   showSuccess(username);
  }
  if (email.value === ''){
    showError(email,'Please enter your email');
  }else if (!IsValidEmail(email.value)){
    showError(email,'Email is not valid');
  }else{
   showSuccess(email);
  }

  if (password.value === '')
  {
    showError(password,'Please enter a password');
  }else{
   showSuccess(password2);
  }

  if (password2.value === '')
  {
    showError(password,'Please repeat password');
  }else{
   showSuccess();
  }

  if (password.value === password2.value)
  {
    showError(password,'the two Password dont match');
  }else{
   showSuccess();
  }
    console.log('submit');  
})











