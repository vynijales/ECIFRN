  const checkPw = document.querySelector("#create_pw"),
   confirmPw = document.querySelector("#confirm_pw"),
   pwShow = document.querySelector(".show"),
   alertIcon = document.querySelector(".error"),
   alertText= document.querySelector(".text"),
   signinBtn = document.querySelector("#signin_btn");

   function redirects_index(){
      window.location.href="cadastro_finalizado.html";
   }
   
   pwShow.addEventListener("click", ()=>{
     if((checkPw.type === "password") && (confirmPw.type === "password")){
       checkPw.type = "text";
       confirmPw.type = "text";
       pwShow.classList.replace("fa-eye-slash","fa-eye");
     }else {
       checkPw.type = "password";
       confirmPw.type = "password";
       pwShow.classList.replace("fa-eye","fa-eye-slash");
     }
   });

   checkPw.addEventListener("input", ()=>{
     let val = checkPw.value.trim()
     if(val.length >= 8){
       confirmPw.removeAttribute("disabled");
       signinBtn.removeAttribute("disabled");
       signinBtn.classList.add("active");
     }else {
       confirmPw.setAttribute("disabled", true);
       signinBtn.setAttribute("disabled", true);
       signinBtn.classList.remove("active");
       confirmPw.value = "";
       alertText.style.color = "#a6a6a6";
       alertText.innerText = "Insira no mínimo 8 caracteres";
       alertIcon.style.display = "none";
     }
   });

  signinBtn.addEventListener("click", ()=>{
   if(checkPw.value === confirmPw.value){
     alertText.innerText = "Senhas coincidem!";
     alertIcon.style.display = "none";
     alertText.style.color = "#097248";
	 redirects_index();
   }else {
     alertText.innerText = "As senhas informadas não coincidem!";
     alertIcon.style.display = "block";
     alertText.style.color = "#ff5a5f";
   }
  });