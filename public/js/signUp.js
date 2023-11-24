// dev JS functions for signing up
const signUpFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (username && email && password) {
      try {
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/'); 
        } else {
          alert('Failed to sign up.'); 
        }
      } catch (err) {
        alert('An unexpected error occurred.');
      }
    }
  };
const signUpForm = document.querySelector('#signup-form');
if (signUpForm) {
  signUpForm.addEventListener('submit', signUpFormHandler);
}