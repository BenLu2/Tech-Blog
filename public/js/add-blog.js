async function newFormHandler(event) {
    event.preventDefault();
    const blog_name = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const user_name = document.querySelector('#user_name').value.trim();
        // Send fetch request to add a new post
    const response = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        user_name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the post is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add blog');
    }
  }
<<<<<<< HEAD
};


document.querySelector('#new-blog-form').addEventListener('submit', newBlogForm);

console.log(document.querySelector('#new-blog-form'))
=======
  
  document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
    
>>>>>>> parent of 6f17e3e (add add blog function)
