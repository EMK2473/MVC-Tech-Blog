// dev JS functions for logging in
const loginFormHandler = async (event) =>{
    event.preventDefault();
    const username = document.querySelector('#email-login').value.trim();
    const password =document.querySelector('#password-login').value.trim();
    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.')
    }
}
};
const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler)
}