var counter=0;
function showhide(psw){
   
    var psw=document.getElementById('loginPsw');
    var psw2=document.getElementById('regPsw');
     if(counter==0){
        psw.type='text';
        psw2.type='text';
        counter=1;
     }
     else{
        psw.type='password';
        psw2.type='password';
        counter=0;
     }
        
  
}