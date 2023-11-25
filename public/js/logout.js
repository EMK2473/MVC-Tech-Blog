// dev JS functions for logging out
const logout = async () =>{
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    if(response.ok){
        document.location.replace('/');
    } else {
        alert('Faliure to logout!')
    }
}

const logoutButton = document.querySelector('#logout');
if(logout){
    logoutButton.addEventListener('click', logout)
}