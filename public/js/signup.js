$("#signup-btn").on("click", function(e) {
    e.preventDefault();
    let newUser = {
        userName: $("#signup-username").val(),
        email: $("#signup-email").val(),
        password: $("#signup-pw").val(),
    }
    console.log("new post data", newUser)
        fetch("/users/signup", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
       
        body: JSON.stringify(newUser)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("backend fetch data", data)
                window.location.href = '/'
    })
})