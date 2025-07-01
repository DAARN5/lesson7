const form = document.querySelector(".js-form"); // посилання на форму 

form.addEventListener("submit", handleSubmit); // submit- подія инпуту

function handleSubmit(event) { 
  event.preventDefault();   // при виклику preventDefault сторінка не перезавантажується 

  const elements = event.target.elements;

  const info = {
    email: elements.email.value,
    password: elements.password.value,
    comment: elements.comment.value
  };

  console.log(info);
  event.target.reset();
}
