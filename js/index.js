const checkPw = document.querySelector("#check_pw"),
   checkMail = document.querySelector("#check_mail"),
   pwShow = document.querySelector(".show"),
   alertIcon = document.querySelector(".error"),
   alertText= document.querySelector(".text"),
   loginBtn = document.querySelector("#login_btn");
   signinBtn = document.querySelector("#signin_btn");
   
   function redirects_signin(){
      window.location.href="cadastro.html";
   }
   function redirects_main(){
    window.location.href="main.html";
 }

   pwShow.addEventListener("click", ()=>{
     if(checkPw.type === "password"){
       checkPw.type = "text";
       pwShow.classList.replace("fa-eye-slash","fa-eye");
     }else {
       checkPw.type = "password";
       pwShow.classList.replace("fa-eye","fa-eye-slash");
     }
   });

  loginBtn.addEventListener("click", ()=>{
   if((checkMail.value === "admin") && (checkPw.value === "admin")){
     alertText.innerText = "Credenciais válidas!";
     alertIcon.style.display = "none";
     alertText.style.color = "#097248";
     redirects_main();
   }else {
     alertText.innerText = "Credenciais Inválidas!";
     alertIcon.style.display = "block";
     alertText.style.color = "#ff5a5f";
   }
  });
  
   signinBtn.addEventListener("click", ()=>{
   redirects_signin();
   });