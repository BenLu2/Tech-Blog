var newBlogForm = async(e) => {
  e.preventDefault();

  console.log('new blog function loaded')

  const title = document.querySelector('#blog-title').value.trim()
  const description = document.querySelector('#blog-body').value.trim()

  console.log(title, description)

  const response = await fetch('/api/blog', {
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