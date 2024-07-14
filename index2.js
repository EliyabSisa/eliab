const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const Para1= document.getElementById('para1');
const Para2= document.getElementById('para2');
const Para3= document.getElementById('para3');
const Para4= document.getElementById('para4');
const buttons = document.querySelectorAll('button');
const Next = document.getElementById('next');
let isButtoncliked = false;
    
const eventListener = ()=>{
  
    (btn1.addEventListener('click',(e)=>{
        Para2.textContent = ''
        Para3.textContent = ''
        Para4.textContent = ''
       
        e.target.disabled = true;
         Para1.textContent += "✔️"
         isButtoncliked  = true
    }));
        
      
      btn2.addEventListener('click',(e)=>{
        Para1.textContent = ''
        Para3.textContent = ''
        Para4.textContent = ''
                                          
         e.target.disabled = true;
          Para2.textContent += "❌"
          isButtoncliked = true
        });
        btn3.addEventListener('click',(e)=>{
            Para1.textContent = ''
            Para2.textContent = ''
            Para4.textContent = ''
           
        e.target.disabled = true;
          Para3.textContent += "❌"
          isButtoncliked =true
        });
        btn4.addEventListener('click',(e)=>{
            Para1.textContent = ''
            Para2.textContent = ''
            Para3.textContent = ''
            
        e.target.disabled = true;
          Para4.textContent += "❌"
          isButtoncliked =true
        });
                                                
        
}
Next.addEventListener("click",()=>{
  if(isButtoncliked){
    window.open("index3.html","_self")
  }else {
    alert("first answer the damn Question!")
  }
})

eventListener()
   
  

  