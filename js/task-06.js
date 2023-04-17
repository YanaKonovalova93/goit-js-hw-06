const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', changeBorderInput)

const inputText = inputEl.getAttribute("data-length");

function changeBorderInput(event) {

    inputEl.classList.remove("valid", "invalid");

    const borderInput = event.currentTarget.value.trim().length === Number(inputText) ? "valid" : "invalid";
    
    inputEl.classList.add(borderInput);

}

