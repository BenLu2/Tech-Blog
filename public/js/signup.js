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
>>>>>>> parent of 3526a89 (redo)
