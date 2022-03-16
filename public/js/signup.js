<<<<<<< HEAD

$("#signup-btn").on("click", function(e) {
    e.preventDefault();
    let newUser = {
        userName: $("#signup-username").val(),
        email: $("#signup-email").val(),
        password: $("#signup-pw").val(),
    }
    console.log("new post data", newUser)
    // fetches data from our [http://localhost(port)]/api/save using a POST route
    fetch("/users/signup", {
        method: "POST",
        // boilerplate fetch req code
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        // stringifys our new object
        body: JSON.stringify(newUser)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("backend fetch data", data)
        // not sure why this isn't redirecting user to home after logging in
        window.location.href = '/'
    })
})

console.log('Signup js file loaded')
=======
console.log('Signup js file loaded')

var signupForm = async(e) => {

    e.preventDefault()

    const username = document.querySelector('#username-signup').value.trim()
    const name = document.querySelector('#name-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
>>>>>>> parent of 569eb7d (changes)

var signupForm = async(e) => {

<<<<<<< HEAD
    e.preventDefault()
document.querySelector('.signup-form').addEventListener('submit', signupForm);
}
=======
    const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({
            name,
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

document.querySelector('.signup-form').addEventListener('submit', signupForm);
>>>>>>> parent of 569eb7d (changes)
