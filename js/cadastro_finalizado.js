  const checkPw = document.querySelector("#create_pw"),
   confirmPw = document.querySelector("#confirm_pw"),
   pwShow = document.querySelector(".show"),
   alertIcon = document.querySelector(".error"),
   alertText= document.querySelector(".text"),
   loginBtn = document.querySelector("#login_btn");

   function redirects_index(){
      window.location.href="index.html";
   }

  loginBtn.addEventListener("click", ()=>{redirects_index();
  });