const email=document.getElementById('exampleInputEmail1');
const password=document.getElementById('exampleInputPassword1');
const btn=document.getElementById('submit');




const emailValidation=()=>{
    
   const emailvalue=email.value.trim();
   const passwordValue=password.value.trim();
 
   let mail= localStorage.getItem("Email");
  let ans=  localStorage.getItem("Password");
   console.log(mail,ans);
  if(emailvalue===mail && passwordValue===ans){
    window.location.href="QuizApp.html";
  }else{
    alert("Write correct mail and password")
  }
}





btn.addEventListener('click',(e)=>{
    e.preventDefault();
    emailValidation();
   
   
})

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}