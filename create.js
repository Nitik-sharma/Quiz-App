const name = document.getElementById('inputName');
const email = document.getElementById('exampleInputEmail1');

const password = document.getElementById('inputPassword5');
const rePass = document.getElementById('Re-pass');

const btn = document.getElementById('btn');

const nameError = document.getElementById('name');
const emailError=document.getElementById('email-error');

const passwordError=document.getElementById('password-error');
const rePassError=document.getElementById('newPassword');
const valid = () => {
    const namevalue = name.value.trim();
    const emailvalue = email.value.trim();
    const passwordValue = password.value.trim();
   
    if ((namevalue === "" || namevalue === null)  ) {
        nameError.innerHTML = "Enter your name";
       
      

        name.style.border="2px solid red";
      
      
    }else{
        localStorage.setItem("Name",namevalue);
    }
    
    if(!isEmail(emailvalue)||(emailvalue === "" || emailvalue === null)){
        emailError.innerHTML="Enter your correct E-mail";
        email.style.border="2px solid red";

       
    }else{
        localStorage.setItem("Email",emailvalue);
    }
    


   
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const isPassword=()=>{
    const passValue=password.value.trim();
    const rePassValue = rePass.value.trim();

    if(passValue===""||passValue===null){
        passwordError.innerHTML="Choose a Password";
        password.style.border="2px solid red";
    }else if(passValue.length<4){
        passwordError.innerHTML="Password must br more than 4 character";
        password.style.border="2px solid red";
    }else{
        localStorage.setItem("Password",passValue);
    }

    if(rePassValue===""||rePassValue===null){
        rePassError.innerHTML="Enter a password for conformation";
        rePass.style.border="2px solid red";
    }else if(rePassValue!==passValue){
       rePassError.innerHTML="Enter a same password which you choose";
        rePass.style.border="2px solid red";
    }else{
        localStorage.setItem("Re-Password",rePassValue);
    }

    
}


btn.addEventListener('click', (e) => {
    
    valid();
    isPassword();
    confirm("Your Account is created");
})