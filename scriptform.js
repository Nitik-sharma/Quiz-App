const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("singUp");

const emailValidation = () => {
  const emailvalue = email.value;
  const passwordValue = password.value;

  let mail = localStorage.getItem("E-mail");
  let ans = localStorage.getItem("Password");
  console.log(mail, ans);
  if (emailvalue === mail && passwordValue === ans) {
    window.location.href = "QuizApp.html";
  } else {
    alert("Write correct mail and password");
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  emailValidation();
});
