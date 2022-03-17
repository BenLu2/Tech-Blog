// var loginForm = async(e) => {
//   e.preventDefault();

//   console.log('login function loaded')

//   const usernameEl = document.querySelector('#username-input-login').value.trim()
//   const passwordEl = document.querySelector('#password-input-login').value.trim()

//   if (usernameEl && passwordEl) {
//       const response = await fetch('/api/user/login', {
//           method: 'POST',
//           body: JSON.stringify({
//               username: usernameEl,
//               password: passwordEl
//           }),
//           headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//           document.location.replace('/');
//       } else {
//           alert('Failed to login');
//       }
//   };
// }

// document.querySelector('.login-form').addEventListener('submit', loginForm);

// console.log('LOGIN JS FILE LOADED!!')
// console.log(document.querySelector('#login-form'))


const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);