const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  if (pass1.value != pass2.value) {
    console.log("HOOOOOOOOOOOOOO")
    e.preventDefault();
    pass2.classList = "invalid"
  }
});
