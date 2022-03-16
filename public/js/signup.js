const signupForm = async(event) => {

    event.preventDefault()

    const username = document.querySelector('#signup-username').value.trim()
    const password = document.querySelector('#signup-pw').value.trim()
    const email = document.querySelector('#signup-email').value.trim()

    console.log(username, password, email)

    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            email
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert('Failed to sign up');
    }
};
console.log('Signup js file loaded')
document.querySelector('.signup-form').addEventListener('submit', signupForm);