var Fname = document.getElementById("Fname");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var reepass = document.getElementById("Re-pass");

const btn = document.getElementById("singUp");

function store() {
  var nameval = Fname.value;
  var emailval = email.value;
  var passval = pass.value;
  var reepassVal = reepass.value;

  if (
    nameval.length === 0 ||
    emailval.length === 0 ||
    passval.length === 0 ||
    reepassVal.length === 0
  ) {
    alert("please fill form correctly");
    return false;
  }

  if (!isEmail(emailval)) {
    alert("Email is not valid");
    return false;
  }

  if (passval !== reepassVal) {
    alert("Password and Ree-Password Must be Same");
    return false;
  }

  localStorage.setItem("E-mail", emailval);
  localStorage.setItem("Password", passval);

  //   console.log(nameval, emailval, passval, reepassVal);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  store();
  console.log("funcation came back");
  window.location.href = "login.html";
});
