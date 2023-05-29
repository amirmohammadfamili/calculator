const buttons=document.getElementsByTagName('button');
 const result=document.getElementById('res');

const result2=document.getElementById('res2');


   


 for (var i = 0; i <= 10; i++) {
   buttons[i].onclick = function(e) {
     if(result.value==0){
      result.value="";
     }
      
      result.value=result.value + e.target.classList.value;
      
      if(e.target.id ==="delete"){
         result.value="";
      }
     
   };
}

function next(){
   
   result2.textContent = result.value;
   result.value="";
}
function div(){
   
   result.value = result2.textContent / result.value;
   result2.textContent="";
}
function mul(){
   
   result.value = result2.textContent *result.value ;
   result2.textContent="";
}

function sub(){
   
   result.value = result2.textContent - result.value ;
   result2.textContent="";
}

/** 
 * !sum has a problem
 **/
function sum(){
   

   result.value = result2.textContent+result.value ;
   result2.textContent="";
}