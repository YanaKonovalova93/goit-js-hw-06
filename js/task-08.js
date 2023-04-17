const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const emailEl = { email: email.value };

  const passwordlEl = { password: password.value };

  const formObj = { ...emailEl, ...passwordlEl };

  console.log(formObj);

  event.currentTarget.reset();
}
