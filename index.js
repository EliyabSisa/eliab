const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const btnEl = document.getElementById('submit');
const divEl  = document.getElementById('div-el');
const btnA = document.getElementById("btn-a") 

btnEl.addEventListener("click",(e)=>{
    
    e.preventDefault()
    
    
    if(inputName.value === ""){
        divEl.textContent += "fill your name!"
        
    }else if(inputEmail.value === ""){
        divEl.textContent += "fill your email"
        
    }else if(inputPassword.value === ""){
        divEl.textContent += "fill your password!"
    }
    else {
       window.open("index2.html","_self")
    }

         
});


    

    
    
    
   

