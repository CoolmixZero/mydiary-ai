const form = document.getElementById("sign_up_form");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  const username = form.elements["username"].value.trim();
  const email = form.elements["email"].value.trim();
  const password = form.elements["password"].value.trim();

  // do something with the form data
  console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
});
