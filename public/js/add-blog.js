<<<<<<< HEAD
$("#newPost-btn").on("click", function(e) {
    e.preventDefault();
    let newPost = {
        title: $("#newPost-title").val(),
        body: $("#newPost-body").val()
    }
    console.log("new post data", newPost)
    fetch("/api/save", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("Data from backend after the fetch", data)
        window.location.reload()
    })
})

$("#newComment-btn").on("click", function(e) {
    e.preventDefault();
    let newComment = {
        body: $("#newComment-body").val()
    }
    console.log("new comment data", newComment)
    fetch("/api/savecomment", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("Data from backend after the fetch", data)
    })
})
=======
var newBlogForm = async(e) => {
  e.preventDefault();

  console.log('new blog function loaded')

  const title = document.querySelector('#blog-title').value.trim()
  const description = document.querySelector('#blog-body').value.trim()

  console.log(title, description)

  const response = await fetch('/api/blog/', {
      method: 'POST',
      body: JSON.stringify({
          title: title,
          description: description
      }),
      headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace('/dashboard');
  } else {
      alert('Failed to create blog');
  }
};


document.querySelector('#new-blog-form').addEventListener('submit', newBlogForm);

console.log(document.querySelector('#new-blog-form'))
>>>>>>> parent of 569eb7d (changes)
